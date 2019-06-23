import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NetworkComponent } from './network.component';
import { ProductService } from '../services/products.service';

@NgModule({
	declarations: [ NetworkComponent ],
	imports: [ BrowserModule ],
	providers: [ ProductService ],
	bootstrap: [ NetworkComponent ]
})

export class NetworkModule { }