import { Injectable } from '@angular/core';

import { HttpProxy } from './util/http.proxy';

@Injectable()
export class StateService {
    constructor(
        private http: HttpProxy
    ) { }

    getCountries() {
        return this.http.getJson('/secure/office');
    }
    getStatesByCountry(countryId: any) {
        return this.http.getJson(`secure/statesbycountry/${countryId}`)
    }
    getDepartamentsByState(stateId: any) {
        return this.http.getJson(`secure/departamentsbystate/${stateId}`)
    }
    getCitiesByState(departamentId: any) {
        return this.http.getJson(`secure/citiesbydepartament/${departamentId}`)
    }
}