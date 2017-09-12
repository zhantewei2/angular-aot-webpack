import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'',component:LazyComponent}
        ])
    ],
    declarations:[LazyComponent]
})
export class LazyModule{}