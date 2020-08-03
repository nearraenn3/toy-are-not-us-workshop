import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductService } from '../service/product.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  product: Product;
  products : Product[] = []; 
  shipping_fee:number;

  constructor(public service: ProductService) {
    this.product=service.product;
    this.shipping_fee=service.shipping_fee;
   }
  ngOnInit(): void {
    this.products=this.service.products;
  }

}
