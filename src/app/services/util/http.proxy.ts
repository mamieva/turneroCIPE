import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { isArray, isPlainObject } from 'lodash';
import { AppSettings } from '../../app.settings';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';

export interface HttpOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}

@Injectable()
export class HttpProxy extends HttpClient {
    token: any;
    tokenInfo: any;

    constructor(
        handler: HttpHandler
    ) {
        super(handler);
        this.token = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')).token : null;
    }

    /**    --------------------------------
     *          Standard HTTP requests
     *     --------------------------------
     */
    public getJson<T>(uri: string, options?: any): Observable<T> {
        if (!options || !options.secure)
            return super.get<T>(this.getUrl(uri), <HttpOptions>this.getOptions());
        else if (options.secure)
            return super.get<T>(this.getUrl(uri), <HttpOptions>this.getOptionsNotSecure());
    }

    public postJSON<T>(uri: string, data: Object): Observable<T> {
        return super.post<T>(this.getUrl(uri), data, <HttpOptions>this.getOptions());
    }

    public putJson<T>(uri: string, data: Object): Observable<T> {
        return super.put<T>(this.getUrl(uri), data, <HttpOptions>this.getOptions());
    }

    public patchJson<T>(uri: string, data: any): Observable<T> {
        return super.patch<T>(this.getUrl(uri), data, <HttpOptions>this.getOptions());
    }

    public headJson<T>(uri: string): Observable<T> {
        return super.head<T>(this.getUrl(uri), <HttpOptions>this.getOptions());
    }

    public deleteJson<T>(uri: string): Observable<T> {
        return super.delete<T>(this.getUrl(uri), <HttpOptions>this.getOptions());
    }

    public optionsJson<T>(uri: string): Observable<T> {
        return super.options<T>(this.getUrl(uri), <HttpOptions>this.getOptions());
    }

    /**    --------------------------------
     *          Custom HTTP requests
     *     --------------------------------
     */

    /**
     * Submit the token form and recover the auth
     *
     * @returns {Observable<UserInterface.User>}
     */
    public login(data?) {
        // -->Set: headers
        // let data: any;
        // let params = new HttpParams();
        // let params ;
        // params = params.append('username', data.username);
        // params = params.append('password', data.password);
        // params = params.append('userName', '1M');
        // params = params.append('password', '1234');
        let params = JSON.stringify({ "userName": data.user, "password": data.password });

        let headers = new HttpHeaders();
        // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');

        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Cache-Control', 'no-cache');
        headers = headers.append('X-Requested-With', 'XMLHttpRequest');
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers = headers.append('Access-Control-Allow-Origin', '*');

        const options = {
            headers: headers,
            params: {},
            observe: 'body',
            reportProgress: true,
            responseType: 'json',
            withCredentials: false,
        };

        return super.post(
            AppSettings.API_ENDPOINT + 'login/',
            params,
            <HttpOptions>options
        )
            .map(token => {
                // -->Set: token
                this.token = token;

                // -->Is: ok?
                this.tokenInfo = {
                    hasToken: true
                };

                // -->Return: token
                return token;
            });
    }

    public loginWithCipe(username: any, password: any, email: any) {

        let params = JSON.stringify({ "userName": username, "password": password, "email": email });

        let headers = new HttpHeaders();
        // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');

        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Cache-Control', 'no-cache');
        headers = headers.append('X-Requested-With', 'XMLHttpRequest');
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers = headers.append('Access-Control-Allow-Origin', '*');

        const options = {
            headers: headers,
            params: {},
            observe: 'body',
            reportProgress: true,
            responseType: 'json',
            withCredentials: false,
        };

        return super.post(
            AppSettings.API_ENDPOINT + 'token/login/',
            params,
            <HttpOptions>options
        )
            .map(token => {
                // -->Set: token
                this.token = token;
                localStorage.setItem('currentUser', JSON.stringify(this.token));

                // -->Is: ok?
                this.tokenInfo = {
                    hasToken: true
                };

                // -->Return: token
                return token;
            });
    }

    public refreshToken() {
        // let params = JSON.stringify({ "userName": data.user, "password": data.password });

        let headers = new HttpHeaders();
        // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let refreshToken = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser'))[0].refreshToken.token : null;

        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Cache-Control', 'no-cache');
        headers = headers.append('X-Requested-With', 'XMLHttpRequest');
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('X-Authorization', refreshToken);

        const options = {
            headers: headers,
            params: {},
            observe: 'body',
            reportProgress: true,
            responseType: 'json',
            withCredentials: false,
        };

        return super.post(
            AppSettings.API_ENDPOINT + 'token/refresh/',
            <HttpOptions>options
        )
            .map(token => {
                // -->Set: token
                this.token = token;

                // -->Is: ok?
                this.tokenInfo = {
                    hasToken: true
                };

                // -->Return: token
                return token;
            });

    }

    /**
     * Prepare request url
     *
     * @param {string} uri
     * @returns {string}
     */
    private getUrl(uri: string): string {
        return AppSettings.API_ENDPOINT + uri;
    }

    /**
     * Get the HTTP options for the requests
     *
     * @returns {HttpOptions}
     */
    private getOptions(data?) {
        let headers = new HttpHeaders();
        headers = headers.append('X-Authorization', `Bearer ${this.token}`);

        const options = {
            headers: headers,
            observe: 'body',
            params: (data) ? new HttpParams({
                fromObject: data
            }) : new HttpParams(),
            reportProgress: true,
            responseType: 'json',
            withCredentials: false
        };

        return options;
    }
    private getOptionsNotSecure(data?) {
        let headers = new HttpHeaders();
        // headers = headers.append('X-Authorization', `Bearer ${this.token}`);

        const options = {
            headers: headers,
            observe: 'body',
            params: (data) ? new HttpParams({
                fromObject: data
            }) : new HttpParams(),
            reportProgress: true,
            responseType: 'json',
            withCredentials: false
        };

        return options;
    }
}