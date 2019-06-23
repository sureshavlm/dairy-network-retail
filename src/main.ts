import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RetailModule } from './app/retail/retail.module';
import { NetworkModule } from './app/network/network.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RetailModule)
  .catch(err => console.error(err));
