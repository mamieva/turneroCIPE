import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
    private showSpinner: boolean = false;

    constructor() {
    }

    mustShowSpinner() {
        return this.showSpinner;
    }

    enableShowSpinner() {
        this.showSpinner = true;
    }

    disableShowSpinner() {
        this.showSpinner = false;
    }
}