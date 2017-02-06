import {Component} from '@angular/core';

@Component({
	selector:'my-app',
	template:`
		<h1>angular-aot-webpack</h1>
		<div class='btn-group'>
			<a class='btn btn-outline-secondary' routerLink='1' routerLinkActive='active'>load</a>
			<a class='btn btn-outline-secondary' routerLink='2' routerLinkActive='active'>Lazy load</a>
		</div>
		<router-outlet> </router-outlet>
	`

})
export class AppComponent{


};
