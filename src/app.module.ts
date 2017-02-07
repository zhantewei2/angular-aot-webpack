import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './router.module';
import {Child2Component} from './child2/child2.component';
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
 ]
})
export class AppModule{}
