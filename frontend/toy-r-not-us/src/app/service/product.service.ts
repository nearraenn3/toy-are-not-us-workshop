import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product;

  constructor() { }

  selectProduct(product:Product){
    this.product=product;
  }
}
