import { Injectable } from '@angular/core';

// import { ApiClientService } from './util/api.client.service';
import { HttpProxy } from './util/http.proxy';
import { Http } from '@angular/http';

@Injectable()
export class PublicService {
    constructor(
        private http: HttpProxy
    ) { }

    // /attended/shift/date/${dateStr}/office/${officeId} - GET (lista de turnos atendidos por dia y oficina)
    getTurnosDiaOficina(dateStr: any, officeId: any) {
        return this.http.getJson(`attended/shift/date/${dateStr}/office/${officeId}/amount/5`, { secure: true })
    }
    // /attended/shift/date/{dateStr}/office/{officeId}/last - GET (ultimo turno atendido)
    getTurnoNuevo(dateStr: any, officeId: any) {
        return this.http.getJson(`attended/shift/date/${dateStr}/office/${officeId}/last`, { secure: true })
    }
    // /attention/shift/date/${dateStr}/office/${officeId} - GET (lista de turnos en espera por dia y oficina)
    getTurnosEspera(dateStr: any, officeId: any) {
        return this.http.getJson(`attention/shift/date/${dateStr}/office/${officeId}/amount/5`, { secure: true })
    }
    getOffices(){
        return this.http.getJson(`office/all`, { secure: true })
    }
}