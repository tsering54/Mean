import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  title: 'Seattle, WA';

  weather;
  temp;
  highTemp;
  lowTemp;
  humidity;
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('seattle').then(weather=>{
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.highTemp = weather.main.temp_max;
      this.lowTemp = weather.main.temp_min;
      this.clouds = weather.weather[0].description;
    })
  }

}
