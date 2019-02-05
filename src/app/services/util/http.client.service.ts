import {Injectable} from '@angular/core';
import {
  Http, XHRBackend, RequestOptions, RequestOptionsArgs, Request, Response, RequestMethod,
  Headers
} from "@angular/http";
import{HttpXhrBackend} from "@angular/common/http"
import { Observable } from "rxjs";
import { AuthenticationService } from '../authentication.service';
import { AppSettings } from '../../app.settings';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpClientService extends Http {
  constructor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    private authenticationService: AuthenticationService,
    private loadingService: LoadingService
  ) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs, disableTryFix = false): Observable<Response> {
    let currentUser: any;
    if (url instanceof Request) {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.authToken) {
        // // console.log("entra a cambiar token", currentUser.authToken.token);
        url.headers.set('X-Authorization', `Bearer ${currentUser.authToken.token}`);
      }
      else {
        this.navigateOnAuthFail();
      }

      // headers appended to every request
      if(!url.headers.get('Content-Type')) {
        url.headers.append('Content-Type', 'application/json;charset=UTF-8');
        url.headers.delete('Content-Type');
      }
    }

    //EVITAR MOSTRAR SPINNER CUANDO ESTA EN EL TODAY
    let urlpr: any = url;
    if(urlpr.url.indexOf('today?') < 0){
      this.loadingService.enableShowSpinner();
    }

    return super.request(url, options).catch((error: Response) => {
      if (!disableTryFix && error.json().exception == 'io.jsonwebtoken.ExpiredJwtException') {
        return this.tryFixAuth(currentUser.refreshToken.token).map(
          (res: any) => {
            ////debugger
            // // console.log("respuesta rara de tryfix en request", res);
            res = res.json();

            // // console.log(res);


            if (res && res[0].token) {
                let obj = JSON.parse(localStorage.getItem('currentUser'));
                obj.authToken.token  = res[0].token;
                localStorage.setItem('currentUser', JSON.stringify(obj));
            }

            // retry request
            return this.request(url, options, true);
          }
        );
      }
      if (error.json().exception == 'io.jsonwebtoken.ExpiredJwtException') {
        this.authenticationService.logout();
        return Observable.throw({error: "Refresh token expired"});
      }

      return Observable.throw(error);
    }).finally(() => {
      this.loadingService.disableShowSpinner();
    });
  }

  private tryFixAuth(token: string): Observable<Response> {
    // // console.log('Trying to fix auth, refresh: ' + token);

    return this.refreshToken(token);
  }

  // sends request with refresh_token to get new aToken
  // the request returns only aToken and refresh_token, no gToken
  private refreshToken(token: string): Observable<Response> {
    // // console.log('refresh token- return de try fix', token);
    // is called only when refresh_token is set
    let refreshToken = token;

    // check refresh_token in case it's not checked before
    if('undefined' === typeof refreshToken || !refreshToken || refreshToken == 'undefined') {
      // there's no refresh_token saved
      return Observable.throw({error: "Refresh token is not set"});
    }

    //let currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
    //currentUser.authToken.token = refreshToken;
    //localStorage.setItem('currentUser', JSON.stringify(currentUser));

    //ACTUALIZAR TOKEN CON REFRESH!!!

    let obj = JSON.parse(localStorage.getItem('currentUser'));
    obj.authToken.token  = refreshToken;
    localStorage.setItem('currentUser', JSON.stringify(obj));


    // form refresh_token request
    const headers = new Headers();
    headers.append('X-Authorization', `Bearer ${refreshToken}`);
    // headers.append('Content-Type', 'application/json;charset=UTF-8');

    const url = AppSettings.API_ENDPOINT + '/token/refresh';

    // refresh_token request
    return this.request(
      new Request({
        method: RequestMethod.Post,
        url: url,
        headers: headers,
        body: ''
      }),
      null, true);
  }

  // Aux methods

  private navigateOnAuthFail() {
    console.warn('Page is going to be refreshed');

    // redirect to auth is performed after reload by authGuard
    // it's possible to add some warning before reload
    // window.location.reload();
  }

  private removeAllTokens() {
    localStorage.removeItem('currentUser');
  }
}