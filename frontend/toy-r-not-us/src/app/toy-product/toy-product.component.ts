import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductService } from '../service/product.service'

@Component({
  selector: 'app-toy-product',
  templateUrl: './toy-product.component.html',
  styleUrls: ['./toy-product.component.css']
})
export class ToyProductComponent implements OnInit {

  products : Product[] = []; 

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    const p1 = new Product ( 11,'Sleep Sheep','Neutral','baby', 39 , 'In Stock', 'BarnyyardBlast')
    const p2 = new Product ( 12,'Scrabble','Neutral','over8', 19.95 , 'In Stock', 'GeekToys')
    const p3 = new Product ( 13,'AA','male','over8', 19 , 'In Stock', 'ddd')
    const p4 = new Product ( 14 ,'BB','female','3to5', 24 , 'In Stock', 'ccc')
      
    this.products.push(p1,p2,p3,p4);
  }

  clickDetail(product:Product): void {
    this.service.selectProduct(product);
  }

}
