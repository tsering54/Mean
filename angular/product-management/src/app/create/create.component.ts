import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  products=[];

  newProduct = { title: '', price: 0, imgUrl: '' };

  constructor(private productService: ProductService, private router: Router) {
    this.products = this.productService.products;  // <-- Step 4    
    }
  
  ngOnInit() {
  }

  onSubmit(formData){
    console.log(this.newProduct)
    this.productService.products.push(this.newProduct);
    this.newProduct = new Product();    
    this.router.navigate(['/products']);    
  };


}
