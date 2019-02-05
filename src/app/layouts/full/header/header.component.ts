import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  currentUser: any = {};
  constructor() {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser')).person;

  }
}
