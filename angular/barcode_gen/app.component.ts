import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  colors: string[];
  barcode: string[];

  constructor(){
    this.title = 'Retro Barcode Generator';
    this.colors = ['DarkSeaGreen', 'MediumAquaMarine', 'Fuchsia', 'AliceBlue', 'AntiqueWhite'];
    this.barcode = [];
    for (let i=0; i<this.colors.length; i++){
      this.barcode[i] = this.colors[Math.floor(Math.random()*this.colors.length)];
    }
  }
}
