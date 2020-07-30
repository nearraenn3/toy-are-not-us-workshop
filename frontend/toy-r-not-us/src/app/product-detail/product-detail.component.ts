import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'
import { Product } from '../models/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(public service: ProductService) {
    this.product=service.product;
   }

  ngOnInit(): void {
  }

}
