import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  constructor(private __http: Http) { }

  retrieveScore(username: string){
    return this.__http.get(`https://api.github.com/users/${username}`).map(data=>data.json()).toPromise();
  }

}
