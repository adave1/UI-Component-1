import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { commonRouting } from './common.routes';
import { ComponentModule } from '../component/component.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        commonRouting,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentModule,
        SharedModule
    ],
    declarations: [],



    exports: []
})
export class CommonPageModule { }
