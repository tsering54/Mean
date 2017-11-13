import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  products=[];

  editProduct = { title: '', price: 0, imgUrl: '' };  
  
  constructor(private productService: ProductService, private router: Router) {
    this.products = this.productService.products;  // <-- Step 4    
    }

  ngOnInit() {
  }
  
  update(product){
    console.log(this.editProduct)
    this.productService.products.push(this.editProduct);
    this.router.navigate(['/products']);
  }
  
}
