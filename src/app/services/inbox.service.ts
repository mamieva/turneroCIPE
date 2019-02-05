import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';

@Injectable()
export class InboxService {
    constructor(
        private http: HttpProxy
    ) {}

    searchCertificateByPerson(doc_number: any, sex: any) {
        return this.http.getJson(`secure/certificate/migrate/search?docNumber=${doc_number}&sex=${sex}`);
    }
    searchCertificateByActa(certificateNumber: any, year: any, officeId: any, certificateTypeCode: any) {
        return this.http.getJson(`secure/certificate/migrate/search?certificateNumber=${certificateNumber}&year=${year}&officeId=${officeId}&certificateTypeCode=${certificateTypeCode}`);
    }
    getCertificateById(certificateId: any) {
        return this.http.getJson(`secure/certificate/${certificateId}`);
    }
    rejectCertificate(certificateId: any) {
        return this.http.putJson(`secure/certificate/migrate/${certificateId}/reject`,null);
    }
    getProcedureByPerson(doc_number: any, sex: any) {
        return this.http.getJson(`secure/procedure/docnumberandsex/search?doc_number=${doc_number}&sex=${sex}`);
    }
}