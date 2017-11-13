import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  title: "Burbank, CA";
  weather;
  temp;
  highTemp;
  lowTemp;
  humidity;
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('burbank').then(weather=>{
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.highTemp = weather.main.temp_max;
      this.lowTemp = weather.main.temp_min;
      this.clouds = weather.weather[0].description;
    })
  }

}
