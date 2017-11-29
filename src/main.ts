import {enableProdMode, ViewEncapsulation} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';


import './app/core/preloader/preloader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  defaultEncapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
}).then(() => {
  if ((<any>window).appBootstrap) {
    (<any>window).appBootstrap();
  }
}).catch(err => console.log(err))
