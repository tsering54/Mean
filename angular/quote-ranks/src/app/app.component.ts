import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  quote: Quote= new Quote();
  quotes:Array<Quote>=[];

  onSubmit(formData){
    //push newQuote to array quotes
    this.quotes.push(this.quote);
    this.quote = new Quote();
    
    console.log(this.quotes)
  }
  

}
