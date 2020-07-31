import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product;
  products: Product[] = [];
  quantity=0;
  shipping_fee:number;

  constructor() { 
    
  }

  selectProduct(product:Product){
    this.product=product;
  }
  saveData(product:Product,quantity:number){
    this.product.Quantity=quantity;
    this.products.push(this.product);
  }

}
