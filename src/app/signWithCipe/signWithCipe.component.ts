import { Component, AfterViewInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatStepper, MatCheckbox } from '@angular/material';
import { MatSnackBar, MatSnackBarConfig, MatTable, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MigrateBorn } from '../services/migrateBorn.service';
import { OfficeService } from '../services/office.service';
import { PersonService } from '../services/person.service';
import { StateService } from '../services/state.service';
import { lookupService } from '../services/lookupService.service';
import { ProcedureService } from '../services/procedure.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'signWithCipe',
  templateUrl: './signWithCipe.component.html',
  styleUrls: ['./signWithCipe.component.scss']
})
export class signWithCipeComponent implements AfterViewInit {
  model: any = {
    signersByRequest: [{}],
    destArea: {
      code: null,
      id: null,
      name: null,
      organization: null,
      status: null
    },
    sourceArea: {
      code: null,
      id: null,
      name: null,
      organization: null,
      status: null
    },
  };
  displayedColumns: any;
  dataSource: any;
  files: any[] = [];
  person: any = {};
  disabledRequest: any = false;
  countFiles: any = 0;

  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private bornService: MigrateBorn,
    private officeService: OfficeService,
    private personService: PersonService,
    private stateService: StateService,
    private router: Router,
    private procedureService: ProcedureService,
    private lookupService: lookupService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.model.requestPerson = JSON.parse(localStorage.getItem('currentUser')).person ? JSON.parse(localStorage.getItem('currentUser')).person : {};
    this.displayedColumns = ['Nombre', 'Size', 'Accion'];
    this.dataSource = new MatTableDataSource();
  }
  ngAfterViewInit() { }
  resetStepper(stepper: MatStepper) {
    stepper.selectedIndex = 0;
  }
  snackBarMessage(msg: any, duration: any) {
    this.snackBar.open(msg, '', {
      duration: duration,
    });
  }
  reset() {
    this.model = {
      signersByRequest: [{}],
      destArea: {
        code: null,
        id: null,
        name: null,
        organization: null,
        status: null
      },
      sourceArea: {
        code: null,
        id: null,
        name: null,
        organization: null,
        status: null
      },
    };
    this.model.requestPerson = JSON.parse(localStorage.getItem('currentUser')).person ? JSON.parse(localStorage.getItem('currentUser')).person : {};
    this.person = {};
    this.disabledRequest = false;
    this.countFiles = 0;
    this.files = [];
    this.dataSource = new MatTableDataSource([]);
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  addFiles() {
    $("#file-input").click();
  }
  uploadFiles(ev: any) {
    let really = this;
    console.log(ev);
    Array.prototype.forEach.call(ev.target.files, (element, index) => {
      let sizeTotal = 0;
      if (element.type != 'application/pdf') {
        really.snackBarMessage('Solo se aceptan Archivos PDF', 6000);
      }
      else {
        really.files.forEach((elemento) => {
          sizeTotal += elemento.size;
        })
        console.log(sizeTotal);
        if (index < 3 && really.files.length < 3) {
          if ((element.size / (1024 * 1024)) <= 15 && ((sizeTotal + element.size) / (1024 * 1024)) <= 15) {
            really.files.push(element);
            sizeTotal += element.size;
          }
          else if (((sizeTotal + element.size) / (1024 * 1024)) > 15)
            really.snackBarMessage('Recuerde que los archivos no pueden superar los 15MB en su total', 6000);
          else
            really.snackBarMessage('No ingrese archivos mayores a 15MB', 6000);
        }
        else {
          really.snackBarMessage('Ha superado la cantidad de archivos a adjuntar', 5000);
          return null;
        }
      }
    });
    // ev.target.files.prot.forEach(element => {
    // });
    this.dataSource = new MatTableDataSource(this.files);
  }
  deleteFile(element: any, index: any) {
    this.files.splice(index, 1)
    this.dataSource = new MatTableDataSource(this.files);
  }
  findPerson() {
    let really = this;
    this.personService.getPersonCIPE(this.model.docNumber, this.model.sex).subscribe((response: any) => {
      // console.log(response);
      really.model.signersByRequest[0].signerPerson = response;
    }, error => {
      console.log(error);
      this.snackBarMessage(error.error.message, 4000)
    })
  }
  uploadFile(file: any, requestId: any) {
    let really = this;
    let formData: FormData = new FormData();
    //// console.log('FILE', file);
    //formData.append('document', JSON.stringify(document));
    formData.append('file', file, file.name);
    formData.append('originalName', file.name);
    formData.append('requestId', requestId);
    formData.append('mimeType', file.type);
    formData.append('fileCode', 'UNS');
    // console.log(file.name);
    this.procedureService.uploadFile(formData).subscribe((response: any) => {
      if (really.countFiles < really.files.length) {
        really.countFiles += 1;
      }
      if (really.countFiles == really.files.length) {
        really.snackBarMessage('Archivos subido con Éxito', 5000);
        really.disabledRequest = false;
        really.procedureService.finishRequest(requestId, really.model).subscribe((response: any) => {
          really.snackBarMessage('Solicitud Enviada con Éxito', 5000);
          really.reset();
        }, error => {
          really.disabledRequest = false;
          really.snackBarMessage(error.error.message, 5000);
        })
      }

    }, error => {
      really.disabledRequest = false;
      really.snackBarMessage(error.error.message, 5000);
    })
  }
  logout() {
    this.router.navigateByUrl('/pages/logout');
  }
  matchEmail() {
    if (this.model.email) {
      let expre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // console.log(this.model.email.toString().match(expre));
      return this.model.email.toString().match(expre) != null;
    }
    else{
      this.snackBarMessage('Ingrese un Email válido',2000)
      return false
    } 
  }
  requestSign() {
    let really = this;
    this.model.documents = this.files;
    this.disabledRequest = true;
    this.procedureService.createRequest(this.model).subscribe((response: any) => {
      // console.log(response);
      Array.prototype.forEach.call(really.files, (element) => {
        really.uploadFile(element, response.id);
      })
    }, error => {
      really.disabledRequest = false;
      really.snackBarMessage(error.error.message, 5000)
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
