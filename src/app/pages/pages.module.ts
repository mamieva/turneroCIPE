import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { CipeLoginComponent } from './login/cipe.login.component';
import { AccessComponent } from './access/access.component';

import { HttpProxy } from '../services/util/http.proxy';
import { OfficeService } from '../services/office.service';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    DemoMaterialModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    CipeLoginComponent,
    RegisterComponent,
    LockComponent,
    AccessComponent
  ],
  providers:[
    OfficeService,
    HttpProxy
  ]
})

export class PagesModule { }
