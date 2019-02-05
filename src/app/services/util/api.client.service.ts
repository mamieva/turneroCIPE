import { Injectable } from '@angular/core';
import { Response,RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs";

// import { HttpClientService } from './http.client.service';
import { AppSettings } from '../../app.settings';

@Injectable()
export class ApiClientService {
    constructor(
        // private http: HttpClientService
    ) {}

    // get(uri: string, options: any = { asJson: true, secure: true}) {
    //     return this.toJSON(this.http.get(this.buildUrl(uri, options.secure)), options.asJson);
    // }
    // getNotJSON(uri: string, options: any = { asJson: true, secure: true}) {
    //     return this.http.get(this.buildUrl(uri, options.secure));
    // }

    // post(uri: string, body: any, options: any = { asJson: true, secure: true}) {
    //     return this.toJSON(this.http.post(this.buildUrl(uri, options.secure), body), options.asJson);
    // }

    // postFiles(uri: string, body: any, options: any = { asJson: true, secure: true}) {

    //     let headerse = new Headers();
    //     // headerse.append('Content-Type', 'text/html; charset=utf-8');
    //     headerse.delete('Content-Type');

    //     // headerse.append('Accept', 'application/json');
    //     let optionse = new RequestOptions({ headers: headerse });

    //     return this.http.post(this.buildUrl(uri, options.secure),body,optionse);
    // }

    // put(uri: string, body: any, options: any = { asJson: true, secure: true}) {
    //     return this.toJSON(this.http.put(this.buildUrl(uri, options.secure), body), options.asJson);
    // }

    // delete(uri: string, options: any = { asJson: true, secure: true}) {
    //     return this.toJSON(this.http.delete(this.buildUrl(uri, options.secure)), options.asJson);
    // }

    // private toJSON(obs: Observable<Response>, asJson: boolean) {
    //     if (asJson == false) {
    //         return obs;
    //     }
    //     else {
    //         return obs.map((response: Response) => response.json());
    //     }
    // }

    private buildUrl(uri: string, secure: boolean) {
        if (secure == false) {
            return AppSettings.API_ENDPOINT + uri;
        }
        else {
            return AppSettings.API_ENDPOINT + '/secure/healthCenter/' + this.getHealthCenterId() + uri;
        }
    }

    public getHealthCenterId() {
        let healthCenterId: number = JSON.parse(localStorage.getItem('healthCenterHasOperator')).healthCenter.id;
        return healthCenterId;
    }
}