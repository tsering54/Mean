import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'A Web Page';
  result: string;
  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    pwConfirm: "",
    streetAdd: "",
    apt: "",
    city: "",
    state: "",
    feel: "",
  };

  onSubmit(){
    this.result = 'Thank you for registering with us ' + this.user.firstName + '. We just sent you an email at ' + this.user.email + 
    ' and we will send all mail to ' + this.user.streetAdd + ', ' + this.user.city + this.user.state + '. Have a wonderful day!';

    this.user = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      pwConfirm: "",
      streetAdd: "",
      apt: "",
      city: "",
      state: "",
      feel: "",

  };

  };
}
