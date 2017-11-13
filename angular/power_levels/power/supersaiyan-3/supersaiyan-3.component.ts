import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-3',
  templateUrl: './supersaiyan-3.component.html',
  styleUrls: ['./supersaiyan-3.component.css']
})
export class Supersaiyan3Component implements OnInit, OnChanges {
  title: "SuperSaiyanThreeComponent";
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 250;
  }

}
