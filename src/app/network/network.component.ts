import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/products.service'

@Component({
	selector: 'network-component',
	templateUrl: './network.component.html'
})

export class NetworkComponent implements OnInit {
	
	productService: ProductService;
	products: any;

	constructor(_prodservice: ProductService) {
		this.productService = _prodservice;
	}

	ngOnInit() {
		this.products = this.productService.query("network");
	}
}