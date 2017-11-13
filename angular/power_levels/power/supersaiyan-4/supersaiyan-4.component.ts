import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-4',
  templateUrl: './supersaiyan-4.component.html',
  styleUrls: ['./supersaiyan-4.component.css']
})
export class Supersaiyan4Component implements OnInit, OnChanges {
  title: "SuperSaiyanFourComponent";
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 500;
  }

}
