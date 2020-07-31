import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'
import { Product } from '../models/product'
import { from } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  products: Product[] = [];

  constructor(public service: ProductService) {
    this.product=service.product;

   }
   
   
  ngOnInit(): void {
  }

  //quantity add-drop 
  quantity: number =1;
  i=1
  plus(){
    if(this.i !=5){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }
  collectData(product:Product): void {
    this.service.saveData(product);
    this.products.push(product);
  }

}

  