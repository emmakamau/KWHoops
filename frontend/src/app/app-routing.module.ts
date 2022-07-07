import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { ContactComponent } from './components/contact/contact.component';
import { DietComponent } from './components/diet/diet.component';
import { NonVegeterianComponent } from './components/non-vegeterian/non-vegeterian.component';
import { VeganComponent } from './components/vegan/vegan.component';
import { VegeterianComponent } from './components/vegeterian/vegeterian.component';

const routes: Routes = [

  {
    path: 'bootcamps',
    component: BootcampsComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'diet',
    component: DietComponent,
  },

  {
    path: 'vegan',
    component: VeganComponent
  },

  {
    path: 'vegetarian',
    component: VegeterianComponent
  },

  {
    path: 'non-vegetarian',
    component: NonVegeterianComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
