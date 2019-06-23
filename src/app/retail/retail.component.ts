import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/products.service'

@Component({
	selector: 'retail-component',
	templateUrl: './retail.component.html'
})

export class RetailComponent implements OnInit {
	
	productService: ProductService;
	products: any;

	constructor(_prodservice: ProductService) {
		this.productService = _prodservice;
	}

	ngOnInit() {
		this.products = this.productService.query("retail");
	}
}