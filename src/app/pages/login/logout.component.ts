import { Component } from '@angular/core';

import { Router } from '@angular/router';
// import { AuthenticationService } from '../../services/authentication.service';

@Component({
    moduleId: module.id,
    template: ``
})

export class LogoutComponent {
    constructor(private router: Router
        // private authenticationService: AuthenticationService
    ) {
        localStorage.clear();
        this.router.navigateByUrl('/signWithCipe');
        // location.reload();
        // authenticationService.logout();
    }
}
