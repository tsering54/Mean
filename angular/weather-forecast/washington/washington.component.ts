import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  title: 'Washington, DC';
  weather;
  temp;
  highTemp;
  lowTemp;
  humidity;
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('washington').then(weather=>{
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.highTemp = weather.main.temp_max;
      this.lowTemp = weather.main.temp_min;
      this.clouds = weather.weather[0].description;
    })
  }

}
