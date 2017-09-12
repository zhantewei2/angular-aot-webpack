import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RoutingModule} from './router/routing.module';

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        RoutingModule
    ],
    bootstrap:[AppComponent]
})
export class AppModule{

}