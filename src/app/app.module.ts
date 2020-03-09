import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting.component'
import { ColorComponent } from './components/color.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, GreetingComponent, ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
