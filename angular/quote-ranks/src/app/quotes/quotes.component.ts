import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes;

  constructor() { }

  ngOnInit() {
  } 
  voteUp(quote){
    quote.rating++;
  }
  voteDown(quote){
    quote.rating--;
  }
  delete(idx){
    this.quotes.splice(idx,1);
  }

}
