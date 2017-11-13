import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products=[];

  constructor(private productService: ProductService) { // <-- Step 2 & 3
    this.products = this.productService.products;  // <-- Step 4
  }

  ngOnInit() {
  }

  delete(product){
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
  }

 
}
