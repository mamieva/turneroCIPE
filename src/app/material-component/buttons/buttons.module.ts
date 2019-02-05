import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';
import { HttpProxy } from '../../services/util/http.proxy';


@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [ButtonsComponent],
    exports: [ButtonsComponent],
    providers: [HttpProxy]
})

export class ButtonsModule { }
