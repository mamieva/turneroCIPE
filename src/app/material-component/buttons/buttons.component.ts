import { Component } from '@angular/core';

import { HttpProxy } from '../../services/util/http.proxy';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor(private proxy: HttpProxy) { }
  clickButton(ev:any){
    this.proxy.login('').subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('currentUser',JSON.stringify(response));
    })
  }
}

