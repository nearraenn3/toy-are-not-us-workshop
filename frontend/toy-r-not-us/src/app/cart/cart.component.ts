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
  shipping_fee = 0;


  constructor(public service: ProductService) {
    this.product=service.product;
   }
  
  
  ngOnInit(): void {
    this.products=this.service.products;
  }

  priceKerry() : void {
    this.shipping_fee = 35;
    this.service.shipping_fee=this.shipping_fee;
  }
  priceLineman() : void {
    this.shipping_fee = 20;
    this.service.shipping_fee=this.shipping_fee;
  }
  priceEms() : void {
    this.shipping_fee = 30;
    this.service.shipping_fee=this.shipping_fee;
  }




  //remove product on cart page
  remove(products) {
      const index: number = this.products.indexOf(products);
      if (index !== -1) {
          this.products.splice(index, 1);      
  }
}
}
