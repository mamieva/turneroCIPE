webpackJsonp(["pages.module"],{

/***/ "../../../../../package.json":
/***/ (function(module, exports) {

module.exports = {"name":"material","version":"0.0.0","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^5.0.0","@angular/cdk":"^5.0.0","@angular/common":"^5.0.0","@angular/compiler":"^5.0.0","@angular/core":"^5.1.2","@angular/flex-layout":"2.0.0-beta.10-4905443","@angular/forms":"^5.0.0","@angular/http":"^5.0.0","@angular/material":"^5.2.5","@angular/material-moment-adapter":"^6.2.0","@angular/platform-browser":"^5.0.0","@angular/platform-browser-dynamic":"^5.0.0","@angular/router":"^5.0.0","@swimlane/ngx-charts":"^7.0.1","@swimlane/ngx-datatable":"^11.1.5","core-js":"^2.4.1","hammerjs":"^2.0.8","jquery":"^3.2.1","moment":"^2.22.2","ng-recaptcha":"^3.0.5","node-sass":"^4.9.0","rxjs":"^5.5.2","zone.js":"^0.8.14"},"devDependencies":{"@angular/cli":"1.5.0","@angular/compiler-cli":"^5.0.0","@angular/language-service":"^5.0.0","@types/chartist":"^0.9.37","@types/jasmine":"~2.5.53","@types/jasminewd2":"~2.0.2","@types/jquery":"^3.2.5","@types/node":"~6.0.60","codelyzer":"~3.2.0","jasmine-core":"~2.6.2","jasmine-spec-reporter":"~4.1.0","karma":"~1.7.0","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.1.2","ts-node":"~3.2.0","tslint":"~5.7.0","typescript":"~2.4.2"}}

/***/ }),

/***/ "../../../../../src/app/pages/access/access.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <!-- column -->\n  <div fxFlexOffset=\"25\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <mat-card *ngIf=\"!office.officeId\">\n      <mat-card-header fxLayoutAlign=\"center end\">\n        <mat-card-title fxLayoutAlign=\"center end\">Seleccione su Oficina</mat-card-title>\n        <!-- <mat-card-subtitle>Ingrese su Usuario y Contraseña</mat-card-subtitle> -->\n      </mat-card-header>\n      <mat-card-content>\n        <mat-nav-list>\n          <a mat-list-item *ngFor=\"let l of list\" (click)=\"selectSection(l)\">{{l.officeName}}</a>\n          <!-- <a mat-list-item href=\"#\" (click)=\"selectSection(3)\"> Seccional 2 </a>\n          <a mat-list-item href=\"#\" (click)=\"selectSection(3)\"> Seccional 3</a> -->\n        </mat-nav-list>\n      </mat-card-content>\n\n    </mat-card>\n    <mat-card *ngIf=\"office.officeId\">\n      <mat-card-header fxLayoutAlign=\"center end\">\n        <mat-card-title fxLayoutAlign=\"center end\">Seleccione su Box</mat-card-title>\n        <!-- <mat-card-subtitle>Ingrese su Usuario y Contraseña</mat-card-subtitle> -->\n      </mat-card-header>\n      <mat-card-content>\n        <mat-nav-list>\n          <a mat-list-item *ngFor=\"let l of office.boxNumbers\" (click)=\"selectBox(l)\">{{l}}</a>\n          <!-- <a mat-list-item href=\"#\" (click)=\"selectSection(3)\"> Seccional 2 </a>\n          <a mat-list-item href=\"#\" (click)=\"selectSection(3)\"> Seccional 3</a> -->\n        </mat-nav-list>\n      </mat-card-content>\n\n    </mat-card>\n    \n    <div fxLayoutAlign=\"center center\">\n      <button mat-stroked-button (click)=\"cancel()\">Cancelar</button>\n    </div>\n  </div>\n  <!-- column -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/access/access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_loading_service__ = __webpack_require__("../../../../../src/app/services/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_office_service__ = __webpack_require__("../../../../../src/app/services/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthenticationService } from '../../services/authentication.service';



var appVersion = __webpack_require__("../../../../../package.json").version;
var AccessComponent = (function () {
    function AccessComponent(element, 
        // private authenticationService: AuthenticationService,
        officeService, router, loadingService, appService) {
        this.element = element;
        this.officeService = officeService;
        this.router = router;
        this.loadingService = loadingService;
        this.test = new Date();
        this.model = {};
        this.withoutCIPE = false;
        this.title = "Seleccione Centro de Salud";
        this.list = [];
        this.office = {};
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
    AccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('currentUser');
        this.officeService.getOfficeUser(this.userId).subscribe(function (response) {
            _this.list = response;
        });
    };
    AccessComponent.prototype.selectSection = function (section) {
        ////debugger
        this.office = section;
        // console.log(this.office.id);
        // Setear currentSection en Localstorage
        localStorage.setItem('currentOffice', JSON.stringify(section));
        //
    };
    AccessComponent.prototype.selectBox = function (box) {
        var _this = this;
        localStorage.setItem('currentBox', box);
        var model = JSON.parse(localStorage.getItem('login'));
        model.userName = JSON.parse(localStorage.getItem('login')).user;
        delete model.user;
        model.userId = localStorage.getItem('currentUser');
        model.boxNumber = box;
        model.officeId = JSON.parse(localStorage.getItem('currentOffice')).officeId;
        this.officeService.getToken(model).subscribe(function (response) {
            console.log(response);
            localStorage.setItem('token', JSON.stringify(response));
            _this.router.navigateByUrl('/starter');
        }, function (error) {
            // alert('ERROR')
            localStorage.setItem('token', '{}');
            _this.router.navigateByUrl('/starter');
        });
    };
    AccessComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/pages/logout');
    };
    AccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'access-cmp',
            template: __webpack_require__("../../../../../src/app/pages/access/access.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_office_service__["a" /* OfficeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__services_app_service__["a" /* AppService */]])
    ], AccessComponent);
    return AccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                    <li class=\" active \">\n                        <a href=\"/pages/lock\">\n                            <i class=\"material-icons\">lock_open</i> Lock\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page lock-page\" filter-color=\"black\">\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                <div class=\"card card-profile card-hidden\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"avatar\" src=\"../assets/img/faces/avatar.jpg\" alt=\"...\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Tania Andrew</h4>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\">Enter Password</label>\n                            <input type=\"password\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button type=\"button\" class=\"btn btn-rose btn-round\">Unlock</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n        <div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/lock.jpeg) \"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LockComponent = (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lock-cmp',
            template: __webpack_require__("../../../../../src/app/pages/lock/lock.component.html")
        })
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/cipe.login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <!-- column -->\n  <div id=\"logue\" *ngIf=\"cipelogin\" fxLayoutAlign=\"center end\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" style=\"margin-top: 20px;\">\n    <img fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"20\" fxFlex=\"20\" src=\"../../../assets/images/Logo.png\" alt=\"\">\n  </div>\n  <div id=\"logueo\" fxFlexOffset=\"25\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" style=\"position: relative; top:10px; display: none\">\n    <mat-card style=\"border-radius: 10px;\">\n      <mat-card-header fxLayoutAlign=\"center end\">\n        <mat-card-title fxLayoutAlign=\"center end\">Identificarse</mat-card-title>\n        <mat-card-subtitle>Ingrese su Usuario y Contraseña</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <form class=\"example-form\">\n          <!-- <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"usuario\" name=\"user\" [(ngModel)]=\"model.user\" value=\"Sushi\">\n          </mat-form-field> -->\n          <mat-form-field class=\"example-full-width\">\n            <mat-select placeholder=\"Usuario\" [(ngModel)]=\"currentOption\" [ngModelOptions]=\"{standalone: true}\"\n              required>\n              <mat-option *ngFor=\"let sec of options\" [value]=\"sec.value\">\n                {{sec.value}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"password\" name=\"pass\" [(ngModel)]=\"model.password\" placeholder=\"contraseña\" value=\"Sushi\">\n          </mat-form-field>\n\n          <div class=\"help-block\" style=\"color: red;\" *ngIf=\"attempts >= 0\">PIN Incorrecto, le quedan: {{attempts}}\n            intentos</div>\n\n          <div style=\"margin-top: 20px\" fxLayoutAlign=\"space-evenly center\">\n            <button (click)=\"goToEntry()\" mat-raised-button color=\"warn\">\n              Cancelar\n            </button>\n            <button (click)=\"readCipe()\" mat-stroked-button color=\"primary\">\n              Leer CIPE\n            </button>\n            <button (click)=\"validatePIN()\" mat-raised-button color=\"primary\">\n              Ingresar\n            </button>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n    <div fxLayoutAlign=\"center end\">\n      <button (click)=\"goToDrivers()\" mat-stroked-button color=\"primary\">Soporte Técnico (Complementos)</button>\n    </div>\n  </div>\n  <div id=\"logoCipe\" style=\"\n  top:-80px;\n  position: relative;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh;\">\n    <img style=\"width:350px; height: 140px;\" src=\"../../../assets/images/Logo.png\" alt=\"\">\n\n    <button (click)=\"entry()\" style=\"margin: 25px 0 0 0 ;\" mat-stroked-button color=\"primary\">\n      <<< Ingresar>>>\n    </button>\n\n  </div>\n  <!-- column -->\n</div>\n\n<div style=\"position:absolute;bottom:0;margin-top:20px;width:100%;\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <img style=\"height:100px\" src=\"../../assets/images/Footer.png\" alt=\"\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/cipe.login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipeLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_loading_service__ = __webpack_require__("../../../../../src/app/services/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_websocket_service__ = __webpack_require__("../../../../../src/app/services/util/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_http_proxy__ = __webpack_require__("../../../../../src/app/services/util/http.proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appVersion = __webpack_require__("../../../../../package.json").version;
var CipeLoginComponent = (function () {
    function CipeLoginComponent(http, element, authenticationService, router, loadingService, ws, snackBar, appService) {
        this.http = http;
        this.element = element;
        this.authenticationService = authenticationService;
        this.router = router;
        this.loadingService = loadingService;
        this.ws = ws;
        this.snackBar = snackBar;
        this.cipelogin = false;
        this.test = new Date();
        this.model = {};
        this.withoutCIPE = false;
        this.title = "INSERTE SU CIPE";
        this.readingCIPE = false;
        this.options = [];
        this.attempts = -1;
        this.nativeElement = element.nativeElement;
    }
    CipeLoginComponent.prototype.entry = function () {
        $("#logoCipe").fadeOut();
        $("#logueo").fadeIn();
        this.cipelogin = true;
        this.appVersion = appVersion;
        this.apiVersion = sessionStorage.getItem('apiVersion');
        if (!this.apiVersion) {
            // appService.getVersion().subscribe((response: any) => {
            //     this.apiVersion = response.appVersion;
            //     sessionStorage.setItem('apiVersion', this.apiVersion);
            // });
        }
        this.sidebarVisible = false;
    };
    CipeLoginComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    CipeLoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    CipeLoginComponent.prototype.readCipe = function () {
        // debugger
        if (this.ws.websocket) {
            this.ws.close();
            this.ws = new __WEBPACK_IMPORTED_MODULE_4__services_util_websocket_service__["a" /* WebsocketService */]();
            clearInterval(this.timer);
            clearInterval(this.timeout);
            // this.send('PING');
            this.readingCIPE = false;
        }
        this.initWS();
        var cmp = this;
        this.timer = setInterval(function () {
            if (!cmp.readingCIPE) {
                cmp.send('PING');
            }
        }, 1000);
    };
    CipeLoginComponent.prototype.initWS = function () {
        var _this = this;
        var really = this;
        // console.log("initWS");
        this.ws.init();
        this.subscription = this.ws.websocket.subscribe(function (msg) {
            _this.lastSent = null;
            // console.log(msg);
            if (msg == 'PONG') {
                clearInterval(_this.timer);
                if (!_this.readingCIPE) {
                    _this.readingCIPE = true;
                    _this.loadingService.enableShowSpinner();
                    _this.send('GET_CERTIFICATES');
                    _this.timeout = setInterval(function () { really.dialog('Asegurese de Insertar La CIPE 3.0 en el Lector.', 4000); }, 4000);
                }
            }
            else if (msg[0] == '[') {
                //debugger
                clearInterval(_this.timeout);
                var list = JSON.parse(msg);
                var saludCert = list.find(function (elem) {
                    return elem.organizations.indexOf('Ministerio de Salud') > 0;
                });
                if (list.length == 0) {
                    _this.router.navigateByUrl('pages/login');
                    return;
                }
                _this.options = [];
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var l = list_1[_i];
                    _this.options.push({ key: l.userName, value: l.name.split('(')[0] });
                }
                if (!saludCert) {
                    if (list.length > 0) {
                        _this.currentOption = list[0].name.split('(')[0];
                        // this.model.userName = list[0].userName ? list[0].userName : null;
                        _this.model.userName = list[0].email ? list[0].email.toString().substr(0, list[0].email.toString().indexOf('@')) : null;
                        _this.model.email = list[0].email ? list[0].email : null;
                    }
                }
                else {
                    _this.currentOption = saludCert.name.split('(')[0];
                    _this.model.userName = saludCert.userName ? saludCert.userName : null;
                    _this.model.email = saludCert.email ? saludCert.email : null;
                }
                _this.loadingService.disableShowSpinner();
            }
            else if (msg.startsWith('OK')) {
                _this.model.serial = msg.replace('OK ', '');
                _this.login();
            }
            else if (msg == 'CARDREADER_OFF') {
                clearInterval(_this.timeout);
                _this.loadingService.disableShowSpinner();
                _this.readingCIPE = false;
                _this.dialog('No se detectó lector de CIPE, asegurese de haber instalado correctamente los Complementos', 10000);
                // this.ws.close();
                // localStorage.setItem('cipe', JSON.stringify({ cipe: false }));
                // this.router.navigateByUrl('pages/login');
            }
            else {
                // console.log('Response:' + msg);
                _this.loadingService.disableShowSpinner();
                _this.attempts = +msg.split("ATTEMPS ")[1];
                // console.log('attempts=' + this.attempts);
            }
        }, function (error) {
            _this.loadingService.disableShowSpinner();
            _this.dialog('No se detectó lector de CIPE, asegurese de haber instalado correctamente los Complementos', 6000);
            localStorage.setItem('cipe', JSON.stringify({ cipe: false }));
            // this.router.navigateByUrl('pages/login');
        }, function () {
            clearInterval(_this.timeout);
            // this.loadingService.disableShowSpinner();
            _this.dialog('Leyendo Cipe Nuevamente', 6000);
            // localStorage.setItem('cipe', JSON.stringify({ cipe: false }));
            // this.router.navigateByUrl('pages/login');
        });
        this.send('PING');
    };
    CipeLoginComponent.prototype.send = function (msg) {
        this.lastSent = +new Date();
        this.ws.websocket.next(msg);
    };
    CipeLoginComponent.prototype.readAgain = function () {
        window.location.reload();
    };
    CipeLoginComponent.prototype.changeOption = function (opt) {
        this.currentOption = opt.value;
        this.model.userName = opt.key;
    };
    CipeLoginComponent.prototype.goToLoginWithoutCIPE = function () {
        localStorage.setItem('cipe', JSON.stringify({ cipe: false }));
        this.router.navigateByUrl('pages/login');
    };
    CipeLoginComponent.prototype.validatePIN = function () {
        this.loadingService.enableShowSpinner();
        this.send('NEW_PIN' + this.model.password);
    };
    CipeLoginComponent.prototype.dialog = function (msg, duration) {
        this.snackBar.open(msg, '', {
            duration: duration,
        });
    };
    CipeLoginComponent.prototype.goToEntry = function () {
        location.reload();
    };
    CipeLoginComponent.prototype.login = function () {
        var really = this;
        this.http.loginWithCipe(this.model.userName, this.model.serial, this.model.email)
            .subscribe(function (data) {
            really.ws.close();
            really.subscription.unsubscribe();
            really.loadingService.disableShowSpinner();
            really.router.navigateByUrl('/signWithCipe');
        }, function (error) {
            // console.log(error);
            // let err = JSON.parse(error._body);
            if (error.status == 400) {
                really.dialog(error.error.message, 7000);
            }
            else
                really.dialog('Contraseña incorrecta', 7000);
            really.loadingService.disableShowSpinner();
        });
    };
    CipeLoginComponent.prototype.goToDrivers = function () {
        this.router.navigateByUrl('/drivers');
    };
    CipeLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-cmp',
            template: __webpack_require__("../../../../../src/app/pages/login/cipe.login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_util_http_proxy__["a" /* HttpProxy */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__services_util_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_app_service__["a" /* AppService */]])
    ], CipeLoginComponent);
    return CipeLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <!-- column -->\n  <div fxFlexOffset=\"25\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-header fxLayoutAlign=\"center end\">\n        <mat-card-title fxLayoutAlign=\"center end\">Identificarse</mat-card-title>\n        <mat-card-subtitle>Ingrese su Usuario y Contraseña</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"usuario\" name=\"user\" [(ngModel)]=\"model.user\" value=\"Sushi\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"password\" name=\"pass\" [(ngModel)]=\"model.password\" placeholder=\"contraseña\" value=\"Sushi\">\n          </mat-form-field>\n          <div fxLayoutAlign=\"end end\">\n            <button (click)=\"login()\" mat-raised-button color=\"primary\">Ingresar</button>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- column -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_loading_service__ = __webpack_require__("../../../../../src/app/services/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_http_proxy__ = __webpack_require__("../../../../../src/app/services/util/http.proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_office_service__ = __webpack_require__("../../../../../src/app/services/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_util_websocket_service__ = __webpack_require__("../../../../../src/app/services/util/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthenticationService } from '../../services/authentication.service';





var appVersion = __webpack_require__("../../../../../package.json").version;

var LoginComponent = (function () {
    function LoginComponent(element, 
        // private authenticationService: AuthenticationService,
        http, officeService, router, loadingService, ws, appService, snackBar) {
        this.element = element;
        this.http = http;
        this.officeService = officeService;
        this.router = router;
        this.loadingService = loadingService;
        this.ws = ws;
        this.appService = appService;
        this.snackBar = snackBar;
        this.test = new Date();
        this.model = {};
        this.withoutCIPE = false;
        this.title = "Inserte su CIPE";
        this.readingCIPE = false;
        this.mock = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var really = this;
        var userName = this.model.documentNumber + this.model.sex;
        this.loadingService.enableShowSpinner();
        if (this.mock) {
            this.http.login(this.model).subscribe(function (response) {
                console.log('login', response);
                localStorage.setItem('login', JSON.stringify(_this.model));
                localStorage.setItem('currentUser', JSON.stringify(response));
                really.router.navigateByUrl('/pages/access');
            }, function (error) {
                really.snackBar.open(error.error.message, '', {
                    duration: 4000,
                });
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-cmp',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_http_proxy__["a" /* HttpProxy */],
            __WEBPACK_IMPORTED_MODULE_4__services_office_service__["a" /* OfficeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_5__services_util_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_7__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthenticationService } from '../../services/authentication.service';
var LogoutComponent = (function () {
    function LogoutComponent(router
        // private authenticationService: AuthenticationService
    ) {
        this.router = router;
        localStorage.clear();
        this.router.navigateByUrl('/signWithCipe');
        // location.reload();
        // authenticationService.logout();
    }
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: ""
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]
            // private authenticationService: AuthenticationService
        ])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_logout_component__ = __webpack_require__("../../../../../src/app/pages/login/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_cipe_login_component__ = __webpack_require__("../../../../../src/app/pages/login/cipe.login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__access_access_component__ = __webpack_require__("../../../../../src/app/pages/access/access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_util_http_proxy__ = __webpack_require__("../../../../../src/app/services/util/http.proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_office_service__ = __webpack_require__("../../../../../src/app/services/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_material_module__ = __webpack_require__("../../../../../src/app/demo-material-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';











var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__demo_material_module__["a" /* DemoMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_cipe_login_component__["a" /* CipeLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__["a" /* LockComponent */],
                __WEBPACK_IMPORTED_MODULE_10__access_access_component__["a" /* AccessComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_office_service__["a" /* OfficeService */],
                __WEBPACK_IMPORTED_MODULE_11__services_util_http_proxy__["a" /* HttpProxy */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__access_access_component__ = __webpack_require__("../../../../../src/app/pages/access/access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_logout_component__ = __webpack_require__("../../../../../src/app/pages/login/logout.component.ts");



var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_2__login_logout_component__["a" /* LogoutComponent */]
            }, {
                //     path: 'cipelogin',
                //     component: CipeLoginComponent
                // }, {
                path: 'access',
                component: __WEBPACK_IMPORTED_MODULE_1__access_access_component__["a" /* AccessComponent */]
                // canActivate: [AuthGuard]
                // }, {
                //     path: 'lock',
                //     component: LockComponent
                // }, {
                //     path: 'register',
                //     component: RegisterComponent
            }]
    }
];


/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\" active \">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/lock\">\n                            <i class=\"material-icons\">lock_open</i> Lock\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page register-page\" filter-color=\"black\">\n        <div class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-md-10 col-md-offset-1\">\n                    <div class=\"card card-signup\">\n                        <h2 class=\"card-title text-center\">Register</h2>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 col-md-offset-1\">\n                                <div class=\"card-content\">\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-rose\">\n                                            <i class=\"material-icons\">timeline</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Marketing</h4>\n                                            <p class=\"description\">\n                                                We've created the marketing campaign of the website. It was a very interesting collaboration.\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-primary\">\n                                            <i class=\"material-icons\">code</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                                            <p class=\"description\">\n                                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-info\">\n                                            <i class=\"material-icons\">group</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Built Audience</h4>\n                                            <p class=\"description\">\n                                                There is also a Fully Customizable CMS Admin Dashboard for this product.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"social text-center\">\n                                    <button class=\"btn btn-just-icon btn-round btn-twitter\">\n                                        <i class=\"fa fa-twitter\"></i>\n                                    </button>\n                                    <button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                                        <i class=\"fa fa-dribbble\"></i>\n                                    </button>\n                                    <button class=\"btn btn-just-icon btn-round btn-facebook\">\n                                        <i class=\"fa fa-facebook\"> </i>\n                                    </button>\n                                    <h4> or be classical </h4>\n                                </div>\n                                <form class=\"form\" method=\"\" action=\"\">\n                                    <div class=\"card-content\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">face</i>\n                                            </span>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">email</i>\n                                            </span>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Email...\">\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">lock_outline</i>\n                                            </span>\n                                            <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" />\n                                        </div>\n                                        <!-- If you want to add a checkbox to this form, uncomment this code -->\n                                        <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\n                                                <a href=\"#something\">terms and conditions</a>.\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div class=\"footer text-center\">\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Get Started</a>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n        <div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/register.jpeg) \"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = (function () {
    function RegisterComponent() {
        this.test = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-cmp',
            template: __webpack_require__("../../../../../src/app/pages/register/register.component.html")
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.22436b951564567c8423.chunk.js.map