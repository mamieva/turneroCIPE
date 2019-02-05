import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../services/authentication.service';
import { LoadingService } from '../../services/util/loading.service';
import { OfficeService } from '../../services/office.service';
import { AppService } from '../../services/app.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

declare var $: any;
declare const swal: any;

declare var require: any;

const { version: appVersion } = require('../../../../package.json');

@Component({
    selector: 'access-cmp',
    templateUrl: './access.component.html'
})

export class AccessComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    private model: any = {};
    public withoutCIPE: boolean = false;
    public title: string = "Seleccione Centro de Salud";
    list: any[] = [];
    appVersion: string;
    apiVersion: string;
    userId: any;
    office: any = {};

    constructor(
        private element: ElementRef,
        // private authenticationService: AuthenticationService,
        private officeService: OfficeService,
        private router: Router,
        private loadingService: LoadingService,
        appService: AppService) {
        this.appVersion = appVersion;
        this.apiVersion = sessionStorage.getItem('apiVersion');
        if (!this.apiVersion) {
            // appService.getVersion().subscribe((response: any) => {
            //     this.apiVersion = response.appVersion;
            //     sessionStorage.setItem('apiVersion', this.apiVersion);
            // });
        }
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.userId = localStorage.getItem('currentUser');

        this.officeService.getOfficeUser(this.userId).subscribe((response: any) => {
            this.list = response;
        });
    }
    selectSection(section: any) {
        ////debugger
        this.office = section;
        // console.log(this.office.id);
        // Setear currentSection en Localstorage
        localStorage.setItem('currentOffice', JSON.stringify(section));
        //
    }
    selectBox(box: any) {
        localStorage.setItem('currentBox', box);
        let model: any = JSON.parse(localStorage.getItem('login'));
        model.userName = JSON.parse(localStorage.getItem('login')).user;
        delete model.user;
        model.userId = localStorage.getItem('currentUser');
        model.boxNumber = box;
        model.officeId = JSON.parse(localStorage.getItem('currentOffice')).officeId;
        this.officeService.getToken(model).subscribe((response: any) => {
            console.log(response);
            localStorage.setItem('token', JSON.stringify(response));
            this.router.navigateByUrl('/starter');
        }, error => {
            // alert('ERROR')
            localStorage.setItem('token', '{}');
            this.router.navigateByUrl('/starter');
        });
    }
    cancel() {
        this.router.navigateByUrl('/pages/logout')
    }
}
