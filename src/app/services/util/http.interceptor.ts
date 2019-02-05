import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpRequest, HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import { map, filter, tap } from 'rxjs/operators';
import { AppSettings } from '../../app.settings';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
// import { HttpProxy } from './http.proxy'
// import 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    constructor(
        public snackBar: MatSnackBar,
        private injector: Injector,
        private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        ////debugger
        let really = this;
        let currentUser = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : null;
        if (currentUser) {
            let token = currentUser.token;
            const reqClone = request.clone({
                headers: request.headers.set('X-Authorization', `Bearer ${token}`)
            });
            return next.handle(reqClone).catch(err => {
                ////debugger
                // console.log(err);
                // console.log(request);
                if (err.status == 500 && err.error.exception == 'io.jsonwebtoken.ExpiredJwtException') {
                    // console.log('entra por 500');
                    really.snackBar.open('Su sesión ha finalizado, actualice la pagina para seguir trabajando correctamente', '', {
                        duration: 4000,
                    })
                    let refresh = request.clone({
                        method: 'POST',
                        url: AppSettings.API_ENDPOINT + 'token/refresh',
                        headers: request.headers.set('X-Authorization', `Bearer ${currentUser.refreshToken.token}`)
                    });
                    next.handle(refresh).subscribe((response: any) => {
                        // console.log('response refresh', response.body);
                        if (response.body) {
                            ////debugger
                            let newToken = JSON.parse(localStorage.getItem('token'));
                            newToken.authToken = response.body ? response.body[0] : '';
                            localStorage.setItem('token', JSON.stringify(newToken))
                            // let newtoken = JSON.parse(localStorage.getItem('currentUser')).authToken.token;
                            // let newReq = request.clone({
                            //     headers: request.headers.set('X-Authorization', `Bearer ${newToken.authToken.token}`)
                            // });

                            // const http = really.injector.get(HttpClient);
                            // // really.injector.get().post(newReq)
                            // http.request(newReq);

                        }
                    }, error => {
                        localStorage.clear();
                        really.router.navigateByUrl('/pages/login');

                    });
                    return Observable.of(err);
                }
                // else if (err instanceof HttpResponse) {
                //     console.log(err.status);
                //     console.log(err.body);
                // }
                else {
                    return Observable.throw(err);
                    // return err;
                    // return Observable.throw(err);

                }
            });
        }
        else {
            return next.handle(request);
            // .catch(err => {
            //     if (err.status == 500 && err.error.exception == 'io.jsonwebtoken.ExpiredJwtException') {
            //         console.log('entra por 500');
            //         let refresh = request.clone({
            //             headers: request.headers.set('X-Authorization', `Bearer ${currentUser.refreshToken.token}`)
            //         });
            //         return next.handle(request);
            //         // return next.handle(refresh);
            //     }
            //     else {
            //         return Observable.throw(err);

            //     }
            // return Observable.of(err);
            // error
            // :
            // "Internal Server Error"
            // exception
            // :
            // "io.jsonwebtoken.ExpiredJwtException"
            // message
            // :
            // "JWT expired at 2018-06-04T12:23:49-0300. Current time: 2018-06-04T12:25:03-0300"
            // path
            // :
            // "//s
            // });
        }
    }
    // .pipe(
    //     tap(x => {
    //         console.log(JSON.parse(x.toString()));
    //         console.log('The do operator is now tap!')
    //     })
    //     // ,
    //     // filter(x => x.length > 8),
    //     // map(x => x.toUpperCase())
    // )

}