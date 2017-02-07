import {Component} from '@angular/core';

@Component({
	selector:'my-app',
	template:`
		<nav class='navbar bg-inverse' style='color:white'>
			<i>angular-aot-webpack</i>
			<i class='align-self-end'>---by zhantewei</i>
		</nav>
		<br>
		<div class='card '>
			<div class='card-header'>
				<div class='nav nav-tabs card-header-tabs'>
					<a class='nav-item nav-link' routerLink='1' routerLinkActive='active'>load</a>
					<a class='nav-item nav-link' routerLink='2' routerLinkActive='active'>Lazy load</a>
				</div>
			</div>
			<div class='card-block'>
				<div class='card-text'>
				<router-outlet> </router-outlet>
				</div>
			</div>
			<div class='card-footer Text-right'>
				<span>Router Card</span>
			</div>
		</div>
	`

})
export class AppComponent{


};
