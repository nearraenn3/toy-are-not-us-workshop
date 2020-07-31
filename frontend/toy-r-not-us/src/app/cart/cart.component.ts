import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductService } from '../service/product.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Product;
  products : Product[] = []; 

  constructor(public service: ProductService) {
    this.product=service.product;
   }
  
  
  ngOnInit(): void {
    this.products=this.service.products;
  }
  remove(products) {
      const index: number = this.products.indexOf(products);
      if (index !== -1) {
          this.products.splice(index, 1);      
  }
    

}
}
