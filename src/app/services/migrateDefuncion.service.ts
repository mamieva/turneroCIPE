import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';
import { AnimateTimings } from '@angular/animations';

@Injectable()
export class MigrateDefuncion {
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
}