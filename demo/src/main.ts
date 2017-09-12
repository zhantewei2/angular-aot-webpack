declare const process:any;
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
process.env.isProd&&enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);