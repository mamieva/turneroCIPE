import { Component, AfterViewInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatSnackBar, MatSnackBarConfig, MatTable, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { InboxService } from '../services/inbox.service'
import { lookupService } from '../services/lookupService.service'
import { OfficeService } from '../services/office.service'
import { PublicService } from '../services/public.service'

@Component({
    selector: 'public',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.scss']
})
export class PublicComponent implements AfterViewInit {
    office: any;
    user: any;
    box: any;
    fecha: Date;
    displayedColumns: any;
    attendedTurn: any[] = [];
    attentionTurns: any[] = [];
    offices: any[] = [];
    dataSource: any;
    timeout: any;
    dataSourceAttention: any;
    datos: any[] = [
        { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
        { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
        { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
        { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 }
    ];
    lastTurn: any = {
    }

    constructor(
        private router: Router,
        private _formBuilder: FormBuilder,
        private inboxService: InboxService,
        private officeService: OfficeService,
        private dialog: MatDialog,
        private publicService: PublicService,
        // private stateService: StateService,
        // private procedureService: ProcedureService,
        private lookupService: lookupService,
        private snackBar: MatSnackBar) {
        this.displayedColumns = ['Turno', 'Hora', 'Nombre', 'Tipo'];
        let really = this;
        // let dia = this.fecha.getDate() + '-' + (this.fecha.getMonth() + 1) + '-' + this.fecha.getFullYear();
        if (this.office) {
            this.timer();
        }
        else {
            this.publicService.getOffices().subscribe((response: any) => {
                really.offices = response;
            }, error => {
                really.snackBarMessage(error.error.message, 5000)
            })
        }
    }
    timer() {
        let really = this;
        this.user = JSON.parse(localStorage.getItem('login'));
        this.office = JSON.parse(localStorage.getItem('currentOfficePublic'));
        this.box = localStorage.getItem('currentBox');
        this.fecha = new Date();
        // let dia = '19-10-2018';
        let dia = this.fecha.getDate() + '-' + (this.fecha.getMonth() + 1) + '-' + this.fecha.getFullYear();
        setInterval(() => {
            this.fecha = new Date();
            this.publicService.getTurnoNuevo(dia, this.office.officeId).subscribe((response: any) => {
                if (response) {
                    if (really.lastTurn && really.lastTurn.turnId != response.turnId) {
                        // debugger
                        var audio = new Audio('../../assets/sound/dingdong.mp3');
                        audio.play();
                        if (really.timeout) {
                            clearTimeout(really.timeout)
                            really.timeout = null;
                        }
                    }
                    else {
                        debugger
                        if (!really.timeout)
                            really.timeout = setTimeout(() => {
                                var audio = new Audio('../../assets/sound/dingdong.mp3');
                                audio.play();
                            }, 10000)
                    }
                    really.lastTurn = response;
                }
            }, error => {
                this.snackBarMessage(error.error.message, 5000)
            })
            this.publicService.getTurnosDiaOficina(dia, this.office.officeId).subscribe((response: any) => {
                really.attendedTurn = response && response.length > 0 ? response : [];
                really.dataSource = new MatTableDataSource(really.attendedTurn);
            }, error => {
                really.snackBarMessage(error.error.message, 5000)
            })
            this.publicService.getTurnosEspera(dia, this.office.officeId).subscribe((response: any) => {
                really.attentionTurns = response && response.length > 0 ? response : [];
                really.dataSourceAttention = new MatTableDataSource(really.attentionTurns);
            }, error => {
                really.snackBarMessage(error.error.message, 5000)
            })
        }, 1000)
    }
    ngAfterViewInit() { }
    ngOnInit() {
        // this.displayColumns = ['Tipo Acta', 'Seccional', 'Nº Tomo', 'Nº Folio', 'Nº Acta', 'Año', 'Estado', 'Acción'];
    }
    snackBarMessage(msg: any, duration: any) {
        this.snackBar.open(msg, '', {
            duration: duration,
        });
    }
    selectSection(element: any) {
        console.log(element);
        if (element && element.officeId) {
            localStorage.setItem('currentOfficePublic', JSON.stringify(element));
            this.timer();
        }
        else {
            this.snackBarMessage('Seleccione una Oficina', 4000);
        }
    }
}

@Component({
    selector: 'preview-dialog',
    templateUrl: 'preview.component.html',
    styleUrls: ['./public.component.scss']
})
export class previewDialog {

    constructor(
        public dialogRef: MatDialogRef<previewDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}