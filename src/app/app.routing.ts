import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './guards/auth.guard';

export const AppRoutes: Routes = [{
  path: '',
  // component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/starter',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }, {
    //   path: '',
    //   // loadChildren: './material-component/material.module#MaterialComponentsModule',
    //   loadChildren: './starter/starter.module#StarterModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'drivers',
    //   loadChildren: './drivers/drivers.module#driversModule'
    // }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule',
    canActivate: [AuthGuard]
  }, {
    path: 'public',
    loadChildren: './public/public.module#PublicModule',
    // canActivate: [AuthGuard]
    // }, {
    //   path: 'cmnac/:id',
    //   loadChildren: './cm-nacimiento/CMNacimiento.module#CMNacimientoModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmdef',
    //   loadChildren: './cm-defuncion/CMDefuncion.module#CMDefuncionModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmdef/:id',
    //   loadChildren: './cm-defuncion/CMDefuncion.module#CMDefuncionModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmmat',
    //   loadChildren: './cm-matrimonio/CMMatrimonio.module#CMMatrimonioModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmmat/:id',
    //   loadChildren: './cm-matrimonio/CMMatrimonio.module#CMMatrimonioModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmrec',
    //   loadChildren: './cm-reconocimiento/CMReconocimiento.module#CMReconocimientoModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmrec/:id',
    //   loadChildren: './cm-reconocimiento/CMReconocimiento.module#CMReconocimientoModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmuni',
    //   loadChildren: './cm-union/CMUnion.module#CMUnionModule',
    //   canActivate: [AuthGuard]
    // }, {
    //   path: 'cmuni/:id',
    //   loadChildren: './cm-union/CMUnion.module#CMUnionModule',
    //   canActivate: [AuthGuard]
  }]
  // }, {
  //   path: 'drivers',
  //   loadChildren: './drivers/drivers.module#driversModule'
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }]
}, {
  path: "**",
  redirectTo: ""
}
];

