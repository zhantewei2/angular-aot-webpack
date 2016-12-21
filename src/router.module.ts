import {Routes,RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';
import {Child2Component} from './child2/child2.component';
const routes:Routes=[
 	{path:'1',component:Child2Component},
 	{path:'2',loadChildren:'./child/child.module#ChildModule'}
];


@NgModule({
	imports:[
		RouterModule.forRoot(routes)
	],
	exports:[
		RouterModule
	]

})
export class AppRoutingModule{

}
