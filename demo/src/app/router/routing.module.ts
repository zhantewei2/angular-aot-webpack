import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './child.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forRoot([
            {path:'child',component:ChildComponent},
            {path:'lazyChild',loadChildren:'./lazy/lazy.module#LazyModule'}
        ]),

    ],
    declarations:[ChildComponent],
    exports:[ChildComponent,RouterModule]
})
export class RoutingModule{

}

