import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { CipeLoginComponent } from './login/cipe.login.component';
import { AccessComponent } from './access/access.component';

import { AuthGuard } from '../guards/auth.guard';
import { LogoutComponent } from './login/logout.component';
export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }, {
            path: 'logout',
            component: LogoutComponent
        }, {
        //     path: 'cipelogin',
        //     component: CipeLoginComponent
        // }, {
            path: 'access',
            component: AccessComponent
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
