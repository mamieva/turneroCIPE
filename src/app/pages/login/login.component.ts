import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
// import { AuthenticationService } from '../../services/authentication.service';
import { LoadingService } from '../../services/util/loading.service';
import { HttpProxy } from '../../services/util/http.proxy';
import { OfficeService } from '../../services/office.service';
import { WebsocketService } from '../../services/util/websocket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

declare var require: any;

const { version: appVersion } = require('../../../../package.json');

import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    private model: any = {};
    public withoutCIPE: boolean = false;
    public title: string = "Inserte su CIPE";
    private subscription: ISubscription;
    lastSent: number;
    readingCIPE: boolean = false;
    timer: any;
    appVersion: string;
    apiVersion: string;
    mock = true;

    constructor(
        private element: ElementRef,
        // private authenticationService: AuthenticationService,
        private http: HttpProxy,
        private officeService : OfficeService,
        private router: Router,
        private loadingService: LoadingService,
        private ws: WebsocketService,
        private appService: AppService,
        public snackBar: MatSnackBar
    ) {
    }
    ngOnInit() {
    }
    login() {
        let really = this;
        let userName: string = this.model.documentNumber + this.model.sex;
        this.loadingService.enableShowSpinner();
        if (this.mock) {
            this.http.login(this.model).subscribe((response: any) => {
                console.log('login', response);
                localStorage.setItem('login',JSON.stringify(this.model));
                localStorage.setItem('currentUser', JSON.stringify(response));
                really.router.navigateByUrl('/pages/access')
            }
                , error => {
                    really.snackBar.open(error.error.message, '', {
                        duration: 4000,
                    });

                })
        }
    }
}
