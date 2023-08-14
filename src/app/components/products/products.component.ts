import { Component } from '@angular/core';

import {ProductsService} from './../../services/product.service'
import { Product } from './../../models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [];
  products2: Product[] = [];

  myProducts = this.productService.getAllSimple().subscribe(products => {
    this.products2 = products;
  });

  constructor(private productService: ProductsService){ }

  ngOnInit():void {
    this.getAllProducts();
    console.log('Products: ',this.products);
    console.log('My Products: ',this.myProducts);
  }
  getAllProducts() {
    this.productService.getAllSimple()
    .subscribe(products => {
      this.products = products;
    });
  }
}
