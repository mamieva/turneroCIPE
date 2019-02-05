webpackJsonp(["public.module"],{

/***/ "../../../../../src/app/public/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Acta Nº\r\n  <b>{{data.certificateNumber}}</b>\r\n</h1>\r\n<div mat-dialog-content>\r\n  <div fxLayoutWrap=\"wrap\" fxLayout=\"row\" fxLayoutAlign=\"start start\" style=\"font-size: 12px;\">\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Tipo de Acta\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.certificateTypeCode}}\r\n    </span>\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Nº Tomo\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.volume.volumeNumber}}\r\n    </span>\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Nº Folio\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.folioNumber}}\r\n    </span>\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Nº Acta\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.certificateNumber}}\r\n    </span>\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Seccional\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.office.name}}\r\n    </span>\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Oficina\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.office.name}}\r\n    </span>\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Año\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.year}}\r\n    </span>\r\n    <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Fecha de Carga\r\n    </span>\r\n    <span fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.date | date: 'dd/MM/yyyy'}}\r\n    </span>\r\n    <span *ngIf=\"data.operatorSign && data.operatorSign.person\" fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Operador de Firma\r\n    </span>\r\n    <span *ngIf=\"data.operatorSign && data.operatorSign.person\" fxFlex.gt-sm=\"55\" fxFlex.gt-xs=\"55\" fxFlex=\"55\">\r\n      {{data.operatorSign.person.lastName + ', ' + data.operatorSign.person.firstName}}\r\n    </span>\r\n  </div>\r\n  <div *ngFor=\"let item of data.people;\" fxLayoutWrap=\"wrap\" fxLayout=\"row\" fxLayoutAlign=\"start start\" style=\"font-size: 12px; margin-top:10px\">\r\n    <span fxFlex.gt-sm=\"95\" fxFlex.gt-xs=\"95\" fxFlex=\"95\" style=\"font-size: 14px; font-weight: bold;\">{{item.actorType.name}}</span>\r\n    <span fxFlex.gt-sm=\"95\" fxFlex.gt-xs=\"95\" fxFlex=\"95\" *ngIf=\"item.actorType.relationship && item.actorType.relationship.name\"\r\n      style=\"font-size: 12px; font-weight: bold;\">Obra en virtud de ser {{item.actorType.relationship.name}}</span>\r\n    <!-- <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n    </span> -->\r\n    <span fxFlex.gt-sm=\"95\" fxFlex.gt-xs=\"95\" fxFlex=\"95\" style=\"margin-top: 5px\">\r\n      {{item.person.lastName + ', ' + item.person.firstName}}\r\n    </span>\r\n    <span *ngIf=\"item.person.docNumber\" fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      {{item.person.docType.name}}\r\n    </span>\r\n    <span *ngIf=\"item.person.docNumber\" fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n      {{item.person.docNumber}}\r\n    </span>\r\n    <span *ngIf=\"item.person.birth.birthDay\" fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n      Fecha de Nacimiento\r\n    </span>\r\n    <span *ngIf=\"item.person.birth.birthDay\" fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n      {{item.person.birth.birthDay | date: 'dd/MM/yyyy'}}\r\n    </span>\r\n    <ng-container *ngIf=\"item.person.birth.birthDayInscription\">\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Hora de Nacimiento\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.birth.birthHour}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Según Certificado de\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.birth.birthNameDoctor}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Matricula\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.birth.birthRegistrationDoctor}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Fecha de Inscripción\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.birth.birthDayInscription | date: 'dd/MM/yyyy'}}\r\n      </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"item.person.death.deathDayInscription\">\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Fecha de Defunción\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.death.deathDay | date: 'dd/MM/yyyy'}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Hora de Defunción\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.death.deathHour}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Causa de Defunción\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.death.deathCause}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Según Certificado de\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.death.deathNameDoctor}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Matricula\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.death.deathRegistrationDoctor}}\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\" class=\"dialog-list\">\r\n        Fecha de Inscripción de Defunción\r\n      </span>\r\n      <span fxFlex.gt-sm=\"45\" fxFlex.gt-xs=\"45\" fxFlex=\"45\">\r\n        {{item.person.death.deathDayInscription | date: 'dd/MM/yyyy'}}\r\n      </span>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n  <span *ngIf=\"data.marginals.length > 0\" style=\"display: block;font-size: 14px; font-weight: bold; margin-top:10px\">\r\n    Marginales\r\n  </span>\r\n  <div *ngFor=\"let item of data.marginals; let i = index;\" style=\"font-size: 12px;\">\r\n    <span fxFlex.gt-sm=\"95\" fxFlex.gt-xs=\"95\" fxFlex=\"95\">\r\n      {{i + 1 + '. ' + item.sentence}}\r\n    </span>\r\n  </div>\r\n  <span *ngIf=\"data.observation\" style=\"display: block;font-size: 14px; font-weight: bold; margin-top:10px\">\r\n    Observaciones\r\n  </span>\r\n  <div style=\"font-size: 12px;\">\r\n    <span fxFlex.gt-sm=\"95\" fxFlex.gt-xs=\"95\" fxFlex=\"95\">\r\n      {{data.observation}}\r\n    </span>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions fxLayoutAlign=\"end center\">\r\n  <!-- <button mat-button (click)=\"onNoClick()\">No Thanks</button> -->\r\n  <button mat-button [mat-dialog-close]=\"data.id\" cdkFocusInitial>Cerrar</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Simple four boxes Row -->\r\n<!-- ============================================================== -->\r\n<div style=\"width:100%;\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <img style=\"height:75px;width:100%;\" src=\"../../assets/images/Encabezado.png\" alt=\"\">\r\n</div>\r\n<div *ngIf=\"office && office.officeId\" fxLayout=\"column\" fxLayoutWrap=\"wrap\">\r\n  <!-- column -->\r\n  <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-between start\">\r\n    <mat-card fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n      <mat-card-content fxLayoutAlign=\"space-between end\">\r\n        <span>\r\n          <b>Centro de Emisión: </b> {{office ? office.officeName : 'San Luis'}}\r\n        </span>\r\n        <span>\r\n          <b>Fecha y Hora :</b> {{fecha | date: 'dd/MM/yyy HH:mm:ss'}}\r\n        </span>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card fxFlex.gt-sm=\"46\" fxFlex.gt-xs=\"46\" fxFlex=\"46\">\r\n      <mat-card-content>\r\n        Turnos en Espera\r\n      </mat-card-content>\r\n\r\n      <div style=\"width: 100%\" class=\"example-container\">\r\n        <mat-table #table [dataSource]=\"dataSourceAttention\">\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"Turno\">\r\n            <mat-header-cell *matHeaderCellDef> Nº Turno </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.turnId}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Hora\">\r\n            <mat-header-cell *matHeaderCellDef> Hora </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.dateTime | date: 'HH:mm'}}\r\n            </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Nombre\">\r\n            <mat-header-cell *matHeaderCellDef> Apellido y Nombre </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.lastName + ', ' +\r\n              element.firstName}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Tipo\">\r\n            <mat-header-cell *matHeaderCellDef> Tipo de Trámite </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.recordType}} </mat-cell>\r\n          </ng-container>\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;let i = index;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n    </mat-card>\r\n    <mat-card fxFlex.gt-sm=\"46\" fxFlex.gt-xs=\"46\" fxFlex=\"46\">\r\n      <mat-card-content>\r\n        Turnos en Box\r\n      </mat-card-content>\r\n\r\n      <div style=\"width: 100%\" class=\"example-container\">\r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"Turno\">\r\n            <mat-header-cell *matHeaderCellDef> Nº Turno </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.turnId}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Hora\">\r\n            <mat-header-cell *matHeaderCellDef> Hora </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.dateTime | date: 'HH:mm'}}\r\n            </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Nombre\">\r\n            <mat-header-cell *matHeaderCellDef> Apellido y Nombre </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.lastName + ', ' +\r\n              element.firstName}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Tipo\">\r\n            <mat-header-cell *matHeaderCellDef>Estado </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"margin-right: 0px\"> {{element.step}} </mat-cell>\r\n          </ng-container>\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;let i = index;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n    </mat-card>\r\n    <mat-card *ngIf=\"lastTurn.turnId\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n      <mat-card-content id=\"turnLast\" style=\" text-align: center;\">\r\n        <h5>Asignación a Box</h5>\r\n        <span style=\"font-size: 45px;display:block; width:100%; margin:20px 0 10px 0;\">\r\n          <b>{{lastTurn.turnId}}</b>\r\n        </span>\r\n        <span style=\"font-size: 40px;display:block; width:100%; margin:20px 0 10px 0;\">\r\n          <b> {{lastTurn.lastName + ', ' + lastTurn.firstName}}</b>\r\n        </span>\r\n        <span style=\"font-size: 40px;display:block; width:100%; margin:20px 0 10px 0;\">\r\n          <b>Box: </b> {{lastTurn.boxNumber}}\r\n        </span>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <!-- column -->\r\n</div>\r\n<div *ngIf=\"!office || !office.officeId\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlexOffset=\"25\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-header fxLayoutAlign=\"center start\">\r\n        <mat-card-title fxLayoutAlign=\"center end\">Seleccione su Oficina</mat-card-title>\r\n        <!-- <mat-card-subtitle>Ingrese su Usuario y Contraseña</mat-card-subtitle> -->\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-nav-list>\r\n          <a mat-list-item *ngFor=\"let l of offices\" (click)=\"selectSection(l)\">{{l.officeName}}</a>\r\n          <!-- <a mat-list-item href=\"#\" (click)=\"selectSection(3)\"> Seccional 2 </a>\r\n          <a mat-list-item href=\"#\" (click)=\"selectSection(3)\"> Seccional 3</a> -->\r\n        </mat-nav-list>\r\n      </mat-card-content>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<div style=\"bottom:0;position: absolute;margin-top:20px;width:100%;\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <img style=\"height:100px\" src=\"../../assets/images/Footer.png\" alt=\"\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/public/public.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-list {\n  text-decoration: underline;\n  font-weight: bold; }\n\n.mat-column-Hora, .mat-column-Turno, .mat-column-action {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 60px;\n          flex: 0 0 60px; }\n\n.mat-column-action {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 80px;\n          flex: 0 0 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* unused harmony export previewDialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inbox_service__ = __webpack_require__("../../../../../src/app/services/inbox.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_lookupService_service__ = __webpack_require__("../../../../../src/app/services/lookupService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_office_service__ = __webpack_require__("../../../../../src/app/services/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_public_service__ = __webpack_require__("../../../../../src/app/services/public.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var PublicComponent = (function () {
    function PublicComponent(router, _formBuilder, inboxService, officeService, dialog, publicService, 
        // private stateService: StateService,
        // private procedureService: ProcedureService,
        lookupService, snackBar) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.inboxService = inboxService;
        this.officeService = officeService;
        this.dialog = dialog;
        this.publicService = publicService;
        this.lookupService = lookupService;
        this.snackBar = snackBar;
        this.attendedTurn = [];
        this.attentionTurns = [];
        this.offices = [];
        this.datos = [
            { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
            { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
            { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
            { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 }
        ];
        this.lastTurn = {};
        this.displayedColumns = ['Turno', 'Hora', 'Nombre', 'Tipo'];
        var really = this;
        // let dia = this.fecha.getDate() + '-' + (this.fecha.getMonth() + 1) + '-' + this.fecha.getFullYear();
        if (this.office) {
            this.timer();
        }
        else {
            this.publicService.getOffices().subscribe(function (response) {
                really.offices = response;
            }, function (error) {
                really.snackBarMessage(error.error.message, 5000);
            });
        }
    }
    PublicComponent.prototype.timer = function () {
        var _this = this;
        var really = this;
        this.user = JSON.parse(localStorage.getItem('login'));
        this.office = JSON.parse(localStorage.getItem('currentOfficePublic'));
        this.box = localStorage.getItem('currentBox');
        this.fecha = new Date();
        // let dia = '19-10-2018';
        var dia = this.fecha.getDate() + '-' + (this.fecha.getMonth() + 1) + '-' + this.fecha.getFullYear();
        setInterval(function () {
            _this.fecha = new Date();
            _this.publicService.getTurnoNuevo(dia, _this.office.officeId).subscribe(function (response) {
                if (response) {
                    if (really.lastTurn && really.lastTurn.turnId != response.turnId) {
                        // debugger
                        var audio = new Audio('../../assets/sound/dingdong.mp3');
                        audio.play();
                        if (really.timeout) {
                            clearTimeout(really.timeout);
                            really.timeout = null;
                        }
                    }
                    else {
                        debugger;
                        if (!really.timeout)
                            really.timeout = setTimeout(function () {
                                var audio = new Audio('../../assets/sound/dingdong.mp3');
                                audio.play();
                            }, 10000);
                    }
                    really.lastTurn = response;
                }
            }, function (error) {
                _this.snackBarMessage(error.error.message, 5000);
            });
            _this.publicService.getTurnosDiaOficina(dia, _this.office.officeId).subscribe(function (response) {
                really.attendedTurn = response && response.length > 0 ? response : [];
                really.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatTableDataSource */](really.attendedTurn);
            }, function (error) {
                really.snackBarMessage(error.error.message, 5000);
            });
            _this.publicService.getTurnosEspera(dia, _this.office.officeId).subscribe(function (response) {
                really.attentionTurns = response && response.length > 0 ? response : [];
                really.dataSourceAttention = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatTableDataSource */](really.attentionTurns);
            }, function (error) {
                really.snackBarMessage(error.error.message, 5000);
            });
        }, 1000);
    };
    PublicComponent.prototype.ngAfterViewInit = function () { };
    PublicComponent.prototype.ngOnInit = function () {
        // this.displayColumns = ['Tipo Acta', 'Seccional', 'Nº Tomo', 'Nº Folio', 'Nº Acta', 'Año', 'Estado', 'Acción'];
    };
    PublicComponent.prototype.snackBarMessage = function (msg, duration) {
        this.snackBar.open(msg, '', {
            duration: duration,
        });
    };
    PublicComponent.prototype.selectSection = function (element) {
        console.log(element);
        if (element && element.officeId) {
            localStorage.setItem('currentOfficePublic', JSON.stringify(element));
            this.timer();
        }
        else {
            this.snackBarMessage('Seleccione una Oficina', 4000);
        }
    };
    PublicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'public',
            template: __webpack_require__("../../../../../src/app/public/public.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/public.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_inbox_service__["a" /* InboxService */],
            __WEBPACK_IMPORTED_MODULE_6__services_office_service__["a" /* OfficeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__services_public_service__["a" /* PublicService */],
            __WEBPACK_IMPORTED_MODULE_5__services_lookupService_service__["a" /* lookupService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSnackBar */]])
    ], PublicComponent);
    return PublicComponent;
}());

var previewDialog = (function () {
    function previewDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    previewDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    previewDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'preview-dialog',
            template: __webpack_require__("../../../../../src/app/public/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/public.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialogRef */], Object])
    ], previewDialog);
    return previewDialog;
}());



/***/ }),

/***/ "../../../../../src/app/public/public.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_material_module__ = __webpack_require__("../../../../../src/app/demo-material-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_component__ = __webpack_require__("../../../../../src/app/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_routing__ = __webpack_require__("../../../../../src/app/public/public.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_inbox_service__ = __webpack_require__("../../../../../src/app/services/inbox.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_lookupService_service__ = __webpack_require__("../../../../../src/app/services/lookupService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_office_service__ = __webpack_require__("../../../../../src/app/services/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_public_service__ = __webpack_require__("../../../../../src/app/services/public.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PublicModule = (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__demo_material_module__["a" /* DemoMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__public_routing__["a" /* PublicRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__public_component__["a" /* PublicComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_public_service__["a" /* PublicService */],
                __WEBPACK_IMPORTED_MODULE_8__services_inbox_service__["a" /* InboxService */],
                __WEBPACK_IMPORTED_MODULE_9__services_lookupService_service__["a" /* lookupService */],
                __WEBPACK_IMPORTED_MODULE_10__services_office_service__["a" /* OfficeService */]
            ]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "../../../../../src/app/public/public.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_component__ = __webpack_require__("../../../../../src/app/public/public.component.ts");

var PublicRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__public_component__["a" /* PublicComponent */]
    }];


/***/ }),

/***/ "../../../../../src/app/services/public.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_http_proxy__ = __webpack_require__("../../../../../src/app/services/util/http.proxy.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ApiClientService } from './util/api.client.service';

var PublicService = (function () {
    function PublicService(http) {
        this.http = http;
    }
    // /attended/shift/date/${dateStr}/office/${officeId} - GET (lista de turnos atendidos por dia y oficina)
    PublicService.prototype.getTurnosDiaOficina = function (dateStr, officeId) {
        return this.http.getJson("attended/shift/date/" + dateStr + "/office/" + officeId + "/amount/5", { secure: true });
    };
    // /attended/shift/date/{dateStr}/office/{officeId}/last - GET (ultimo turno atendido)
    PublicService.prototype.getTurnoNuevo = function (dateStr, officeId) {
        return this.http.getJson("attended/shift/date/" + dateStr + "/office/" + officeId + "/last", { secure: true });
    };
    // /attention/shift/date/${dateStr}/office/${officeId} - GET (lista de turnos en espera por dia y oficina)
    PublicService.prototype.getTurnosEspera = function (dateStr, officeId) {
        return this.http.getJson("attention/shift/date/" + dateStr + "/office/" + officeId + "/amount/5", { secure: true });
    };
    PublicService.prototype.getOffices = function () {
        return this.http.getJson("office/all", { secure: true });
    };
    PublicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_http_proxy__["a" /* HttpProxy */]])
    ], PublicService);
    return PublicService;
}());



/***/ })

});
//# sourceMappingURL=public.module.8cd6aa2377a18e5ffcf9.chunk.js.map