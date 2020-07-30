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

  constructor(public service: ProductService) {
    this.product=service.product;
   }

  ngOnInit(): void {
  }

}
