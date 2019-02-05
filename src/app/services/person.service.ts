import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';

@Injectable()
export class PersonService {
    constructor(
        private http: HttpProxy
    ) { }

    getPersonByDocumentSex(dni: any, sex: any) {
        return this.http.getJson(`secure/person/data/${dni}/${sex}`);
    }
    getPersonCIPE(docNumber: any, sex: any) {
        return this.http.getJson(`secure/web/person/data/${docNumber}/${sex}`);
    }
}