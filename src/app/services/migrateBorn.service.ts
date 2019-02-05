import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';
import { AnimateTimings } from '@angular/animations';

@Injectable()
export class MigrateBorn {
    constructor(
        private http: HttpProxy
    ) { }

    postActa(acta: any) {
        return this.http.postJSON('secure/certificate/migrate/', acta);
    }
    bloquearActa(actaId: any, actaBloquear: any) {
        return this.http.putJson(`secure/certificate/migrate/${actaId}/blocked`, actaBloquear);
    }

    addMargin(margin: any) {
        return this.http.postJSON('secure/margin', margin);
    }
    putMargin(margin: any) {
        return this.http.putJson(`secure/margin/${margin.id}/edit`, margin);
    }
    deleteMargin(marginId: any) {
        return this.http.deleteJson(`secure/margin/${marginId}/delete`);
    }
    uploadFile(file: any) {
        return this.http.postJSON(`secure/files/upload`, file)
    }
    approveActa(certificateId: any, certificate: any) {
        return this.http.putJson(`secure/certificate/${certificateId}/approve`, certificate)
    }
    approveProcedure(procedureId: any, procedure: any) {
        return this.http.putJson(`secure/procedure/${procedureId}/approve`, procedure)
    }
    addObservation(certificate_id: any, observation: any) {
        return this.http.putJson(`secure/certificate/${certificate_id}/observations`, observation)
    }
    deleteFiles(documentId: any) {
        return this.http.deleteJson(`secure/document/${documentId}/delete`)
    }

    // getAllOperators(search: any, page: any, size: any) {
    //     return this.http.get('/operator?&search=' + search + '&page=' + page + '&size=' + size + '&sort=dateCreated,asc' );
    // }

    // postOperator(operator: any) {
    //     return this.http.post('/operator', operator);
    // }

    // putOperator(id: number, operator: any) {
    //     return this.http.put('/operator/' + id, operator);
    // }

    // deleteOperator(id: number) {
    //     return this.http.delete('/operator/' + id);
    // }
}