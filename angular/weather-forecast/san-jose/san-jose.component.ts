import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  title: "San Jose, CA";

  weather;
  temp;
  highTemp;
  lowTemp;
  humidity;
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('san-jose').then(weather=>{
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.highTemp = weather.main.temp_max;
      this.lowTemp = weather.main.temp_min;
      this.clouds = weather.weather[0].description;
    })
  }

}
