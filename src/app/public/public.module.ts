import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicComponent } from './public.component';
import { PublicRoutes } from './public.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InboxService } from '../services/inbox.service'
import { lookupService } from '../services/lookupService.service'
import { OfficeService } from '../services/office.service'
import { PublicService } from '../services/public.service'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(PublicRoutes)

  ],
  declarations: [PublicComponent],
  providers: [
    PublicService,
    InboxService,
    lookupService,
    OfficeService
  ]
})

export class PublicModule { }
