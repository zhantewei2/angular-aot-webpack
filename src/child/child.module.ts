import {NgModule} from '@angular/core';
import {ChildComponent} from './child.component';
import {Routes,RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
const routes:Routes=[
	{path:'',component:ChildComponent}
]
@NgModule({
	imports:[
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations:[ChildComponent]
})
export class ChildModule{};