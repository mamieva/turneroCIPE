import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarterComponent } from './starter.component';
import { StarterRoutes } from './starter.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InboxService } from '../services/inbox.service'
import { lookupService } from '../services/lookupService.service'
import { OfficeService } from '../services/office.service'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StarterRoutes)

  ],
  declarations: [StarterComponent],
  providers: [
    InboxService,
    lookupService,
    OfficeService
  ]
})

export class StarterModule { }
