import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Score';
  username: string;
  score: number;
  status: string[] = [];
  userExists = null;

  constructor(private _taskService: TaskService){}


  onSubmit(){
    this._taskService.retrieveScore(this.username)
    .then(user => {this.score = user.public_repos + user.followers;
      this.userExists = true;
    })
    .catch(err => {console.log(err)
      this.userExists = false;
    })

  }

}
