import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Business components
import { AppComponent } from './app.component';
import { GreetingComponent } from './components/ComponentInteraction/greeting.component'
import { ColorComponent } from './components/ComponentInteraction/color.component';
import { ComponentInteraction } from './components/ComponentInteraction/component-interaction.component';
import { LandingComponent } from './components/Greetings/landing.component';


@NgModule({
  declarations: [
    AppComponent, GreetingComponent, ColorComponent, ComponentInteraction, LandingComponent
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
