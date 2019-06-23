import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

	products: any = [
		{name: "iPhone XR", brand: "Apple", category: "retail", price: 60000},
		{name: "Colgate", brand: "Colgate", category: "retail", price: 50},
		{name: "Dlink", brand: "dlink", category: "network", price: 3000},
		{name: "Cheese", brand: "Parag", category: "dairy", price: 1000}
	]
	
	query(_criteria: string) {

		let temp:any = [];
		for(let item of this.products){
			if(item.category == _criteria){
				temp.push(item);
			}
		}
		return temp;

	}

	add(_product) {
		this.products.push(_product);
	}

	update(){

	}

	delete() {

	}
}