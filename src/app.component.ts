import {Component} from '@angular/core';

@Component({
	selector:'my-app',
	template:`
		<h1>angular-aot-webpack</h1>

		<div class='btn btn-default'><a routerLink='/1'>load</a></div>
		<div class='btn btn-default'><a routerLink='/2'>Lazy load</a></div>
		<router-outlet> </router-outlet>
	`

})
export class AppComponent{


};