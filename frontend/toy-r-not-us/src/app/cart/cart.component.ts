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
  shipping_fee =0;

  constructor(public service: ProductService) {
    this.product=service.product;
   }
  
  
  ngOnInit(): void {
    this.products=this.service.products;
  }

  priceKerry() : void {
    this.shipping_fee = 35;
  }
  priceLineman() : void {
    this.shipping_fee = 20;
  }
  priceEms() : void {
    this.shipping_fee = 30;
  }


}
