import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';

@Injectable()
export class lookupService {
    constructor(
        private http: HttpProxy
    ) { }
    
    private getOfficeLogged() {
        return localStorage.getItem('currentSection');
    }
    getDocumentType() {
        return this.http.getJson('secure/lookup/documentType');
    }
    getRelationship() {
        return this.http.getJson('secure/lookup/relationship');
    }
    getModules(officeId: any) {
        return this.http.getJson(`secure/office/${officeId}/modules`);
    }
    getCivilStatus() {
        return this.http.getJson(`secure/lookup/civilStatus`);
    }
    getAgeType() {
        return this.http.getJson(`secure/lookup/ageType`);
    }
    getCertificateTypes(officeId: any) {
        return this.http.getJson(`secure/civilRegistration/${officeId}/certificateType`);
    }
    getActorTypesByProcedureType(procedureTypeCode: any) {
        return this.http.getJson(`secure/proceduretype/${procedureTypeCode}/actorTypes`);
    }
    getActorTypesByCertificateType(certificateType: any) {
        return this.http.getJson(`secure/certificate/${certificateType}/actorTypes`);
    }
    getOperatorsSign() {
        return this.http.getJson(`secure/civilRegistration/`+ this.getOfficeLogged() +`/operator/sign?search=`);
    }
    getCertificateById(certificateId: any) {
        return this.http.getJson(`secure/certificate/${certificateId}`);
    }
    getProcedureById(procedureId: any) {
        return this.http.getJson(`secure/procedure/${procedureId}`);
    }
}