import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'
import { Product } from '../models/product'

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  product: Product;

  constructor(public service: ProductService) {
    this.product=service.product;

   }

  ngOnInit(): void {
  }

}
