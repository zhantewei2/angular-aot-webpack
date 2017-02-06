import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './router.module';
import {Child2Component} from './child2/child2.component';
import {CookieXSRFStrategy,XSRFStrategy} from '@angular/http';
@NgModule({
 imports:[
 	BrowserModule,
 	AppRoutingModule
 	],
 declarations:[
 	AppComponent,
 	Child2Component
 	],
 bootstrap:[AppComponent],
 providers:[	
  {provide:XSRFStrategy,useValue:new CookieXSRFStrategy('XSRF-TOKEN','X-XSRF-TOKEN')}
 ]
})
export class AppModule{}
