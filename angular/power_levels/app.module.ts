import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power/supersaiyan/supersaiyan.component';
import { Supersaiyan2Component } from './power/supersaiyan-2/supersaiyan-2.component';
import { Supersaiyan3Component } from './power/supersaiyan-3/supersaiyan-3.component';
import { Supersaiyan4Component } from './power/supersaiyan-4/supersaiyan-4.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    Supersaiyan2Component,
    Supersaiyan3Component,
    Supersaiyan4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
