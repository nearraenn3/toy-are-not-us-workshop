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
  constructor(public service: ProductService) {
    this.product=service.product;
   }
  ngOnInit(): void {
    this.products=this.service.products;
  }

}
