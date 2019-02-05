import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';

@Injectable()
export class ProcedureService {
    constructor(
        private http: HttpProxy
    ) { }

    postProcedure(procedure: any) {
        return this.http.postJSON('secure/procedure', procedure);
    }
    putProcedure(procedure_id: any, procedure: any) {
        return this.http.putJson(`secure/procedure/${procedure_id}`, procedure);
    }
    getProcedure(procedure_id: any) {
        return this.http.getJson(`secure/procedure/${procedure_id}`);
    }
    getProcedureByPerson(doc_number: any, sex: any) {
        return this.http.getJson(`secure/procedure/docnumberandsex/search?doc_number=${doc_number}&sex=${sex}`);
    }
    createRequest(request: any) {
        return this.http.postJSON(`secure/web/request`, request);
    }
    uploadFile(file: any) {
        return this.http.postJSON(`secure/web/files/upload`, file);
    }
    finishRequest(requestId: any, request: any) {
        return this.http.postJSON(`secure/web/request/finished/${requestId}`, request);
    }
}