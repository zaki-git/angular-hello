import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/Greetings/landing.component';
import{ ComponentInteraction } from './components/ComponentInteraction/component-interaction.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'component-interaction', component: ComponentInteraction }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
