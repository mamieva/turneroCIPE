import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { AuthGuard } from './guards/auth.guard';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

// import { HttpClientService } from './services/util/http.client.service';
// import { ApiClientService } from './services/util/api.client.service';
import { WebsocketService } from './services/util/websocket.service';
import { LoadingService } from './services/util/loading.service';
import { AppService } from './services/app.service';
import { WindowRef } from './services/util/window.ref';
import { AuthenticationService } from './services/authentication.service';
import { lookupService } from './services/lookupService.service';
import { HttpProxy } from './services/util/http.proxy';
import { CustomHttpInterceptor } from './services/util/http.interceptor';
import { SafeHtmlPipe } from './services/pipes/safe.html.pipe';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { previewDialog } from './starter/starter.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AuthLayoutComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    SafeHtmlPipe,
    previewDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    // ApiClientService,
    lookupService,
    AppService,
    WebsocketService,
    LoadingService,
    HttpProxy,
    WindowRef,
    AuthenticationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  entryComponents: [previewDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
