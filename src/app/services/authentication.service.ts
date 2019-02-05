import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpClientModule, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppSettings } from '../app.settings';
import { WindowRef } from './util/window.ref';

@Injectable()
export class AuthenticationService {
    redirectUrl: string;
    nativeWindow: any;

    constructor(
        private http: HttpClient,
        private router: Router,
        private winRef: WindowRef
    ) {
        this.nativeWindow = winRef.getNativeWindow();
    }

    login(username: string, password: string, email: string) {
        //
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Cache-Control', 'no-cache');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Access-Control-Allow-Methods', 'POST');
        // let options = new RequestOptions({ headers: headers });

        return this.http.post(AppSettings.API_ENDPOINT + '/token/login/', JSON.stringify({ "userName": username, "password": password, "email": email }))
            .map((response: Response) => {
                /*
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.authToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response.json()));
                }
                */
                localStorage.setItem('currentUser', JSON.stringify(response.json()[0]));
                //localStorage.setItem('currentUser', JSON.stringify(response.json()[0]));
            });
    }
    loginWithoutCipe(username: string, password: string) {
        //
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Cache-Control', 'no-cache');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Access-Control-Allow-Methods', 'POST');
        // let options = new Headers({ headers: headers });

        return this.http.post(AppSettings.API_ENDPOINT + '/token/login/temporal', JSON.stringify({ "userName": username, "password": password }))
            .map((response: Response) => {
                /*
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.authToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response.json()));
                }
                */
                localStorage.setItem('currentUser', JSON.stringify(response.json()[0]));
                //localStorage.setItem('currentUser', JSON.stringify(response.json()[0]));
            });
    }

    getToken(procedureTypeId: number, username: string, password: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Cache-Control', 'no-cache');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Access-Control-Allow-Methods', 'POST');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppSettings.API_ENDPOINT + '/token/external/' + procedureTypeId, JSON.stringify({ "email": username, "password": password })).map((response: Response) => response.json());
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/pages/login']);
    }
}