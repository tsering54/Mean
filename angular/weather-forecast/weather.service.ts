import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private __http: Http) { }

  getWeather(city: string){
    return this.__http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f69c127bd14a91c56abb99d98c2e478a`).map(data=>data.json()).toPromise();
  }
}

