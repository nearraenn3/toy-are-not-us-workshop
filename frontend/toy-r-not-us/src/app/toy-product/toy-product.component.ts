import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'

@Component({
  selector: 'app-toy-product',
  templateUrl: './toy-product.component.html',
  styleUrls: ['./toy-product.component.css']
})
export class ToyProductComponent implements OnInit {

  products : Product[] = []; 

  constructor() { }

  ngOnInit(): void {
    const p1 = new Product ( 11,'Sleep Sheep','Neutral','baby', 39 , 'Instock', 'BarnyyardBlast')
    const p2 = new Product ( 12,'Scrabble','Neutral','over8', 19.95 , 'Instock', 'Graeektoy')
    const p3 = new Product ( 13,'AA','male','over8', 19 , 'Instock', 'ddd')
    const p4 = new Product ( 14 ,'BB','female','3to5', 24 , 'Instock', 'ccc')
      
    this.products.push(p1,p2,p3,p4);
  }

}
