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

@Component({
  selector: 'starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit {
  office: any;
  user: any;
  userId: any;
  box: any;
  interval: any;
  fecha: Date;
  displayedColumns: any;
  displayedColumnsTurnos: any;
  dataSourceATomar: any;
  dataSourceTomados: any;
  datos: any[] = [
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 },
    { hora: '11:00', nombre: 'Roberto Gomez Bolaños', tipo: 'Cipe', numero: 123 }
  ]

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private inboxService: InboxService,
    private officeService: OfficeService,
    private dialog: MatDialog,
    // private personService: PersonService,
    // private stateService: StateService,
    // private procedureService: ProcedureService,
    private lookupService: lookupService,
    private snackBar: MatSnackBar) {
    let really = this;
    this.displayedColumns = ['Turno', 'Hora', 'Nombre', 'Tipo', 'action'];
    this.displayedColumnsTurnos = ['Turno', 'Hora', 'Nombre', 'Tipo'];
    this.user = JSON.parse(localStorage.getItem('login'));
    this.office = JSON.parse(localStorage.getItem('currentOffice'));
    this.userId = JSON.parse(localStorage.getItem('currentUser'));
    this.box = localStorage.getItem('currentBox');
    this.fecha = new Date();
    // let dia = '19-10-2018';
    let dia = this.fecha.getDate() + '-' + (this.fecha.getMonth() + 1) + '-' + this.fecha.getFullYear();
    this.interval = setInterval(() => {
      really.fecha = new Date();
      really.officeService.getTurnosUser(dia, really.userId).subscribe((response: any) => {
        let datos = response && response.length > 0 ? response : [];
        really.dataSourceTomados = new MatTableDataSource(datos);
      }, error => {
        really.snackBarMessage(error.error.message, 4000);
      })
      really.officeService.getTurnosOffice(dia, really.office.officeId).subscribe((response: any) => {
        let datos = response && response.length > 0 ? response : [];
        really.dataSourceATomar = new MatTableDataSource(datos);
      }, error => {
        really.snackBarMessage(error.error.message, 4000);
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
  presente(element: any) {
    let really = this;
    element.officeId = this.office.officeId;
    element.boxNumber = this.box;
    element.userId = this.userId;
    this.officeService.insertTurno(element.turnId, element).subscribe((response: any) => {
      console.log(response);
    }, error => {
      really.snackBarMessage(error.error.message, 4000);
    })
  }
  llamarTurno(element: any, index: any) {
    let really = this;
    element.officeId = this.office.officeId;
    element.boxNumber = this.box;
    element.userId = this.userId;
    this.officeService.llamarTurno(element).subscribe((response: any) => {
      console.log(response);
    }, error => {
      really.snackBarMessage(error.error.message, 4000);
    })
  }
  logout() {
    clearInterval(this.interval);
    this.router.navigateByUrl('/pages/logout');
  }
}

@Component({
  selector: 'preview-dialog',
  templateUrl: 'preview.component.html',
  styleUrls: ['./starter.component.scss']
})
export class previewDialog {

  constructor(
    public dialogRef: MatDialogRef<previewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}