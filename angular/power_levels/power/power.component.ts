import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  title: "PowerComponent";
  power: number;

  constructor() { }

  ngOnInit() {
    this.power=10;
  }

}
