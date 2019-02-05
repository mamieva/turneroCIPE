import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';

@Injectable()
export class OfficeService {
    constructor(
        private http: HttpProxy
    ) { }

    getOffices() {
        return this.http.getJson('/secure/office');
    }
    getOffice(officeId: any) {
        return this.http.getJson('/secure/office/' + officeId)
    }
    getOfficeUser(userId: any) {
        return this.http.getJson(`office/user/${userId}`);
    }
    getToken(model: any) {
        return this.http.postJSON(`token`, model);
    }
    getTurnosOffice(dateStr: any, officeId: any) {
        // - Permite buscar los turnos disponibles para una oficina en un dia determinado
        return this.http.getJson(`secure/attention/shift/date/${dateStr}/office/${officeId}`);
    }
    getTurnosUser(dateStr: any, userId: any) {
        // - Permite buscar los turnos disponibles para una oficina en un dia determinado
        return this.http.getJson(`secure/attended/shift/date/${dateStr}/user/${userId}`);
    }
    llamarTurno(model: any) {
        // Inserta el turno seleccionado con el box del usuario que toma el turno para atenderlo. Json de ejemplo para el body
        return this.http.postJSON(`secure/attended/shift`, model);
    }
    insertTurno(shiftId: any, model: any) {
        // Inserta el turno seleccionado con el box del usuario que toma el turno para atenderlo. Json de ejemplo para el body
        return this.http.putJson(`secure/attended/shift/${shiftId}`, model);
    }
    deleteTurno(shiftId: any, model: any) {
        // Inserta el turno seleccionado con el box del usuario que toma el turno para atenderlo. Json de ejemplo para el body
        return this.http.deleteJson(`secure/attended/shift/${shiftId}`);
    }
}