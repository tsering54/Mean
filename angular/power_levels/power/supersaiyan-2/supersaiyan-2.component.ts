import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-2',
  templateUrl: './supersaiyan-2.component.html',
  styleUrls: ['./supersaiyan-2.component.css']
})
export class Supersaiyan2Component implements OnInit, OnChanges {
  title: "SuperSaiyanTwoComponent";
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 150;
  }

}
