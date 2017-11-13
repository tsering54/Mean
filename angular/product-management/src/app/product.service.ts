import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor() { }

  products= [
    {title: 'DSLR image', price: 1799.99, imgUrl: '../../assets/dslr.jpg'},
    {title: 'iLaptop', price:1299.99, imgUrl: '../../assets/macbook.jpg'}
  ]


}
