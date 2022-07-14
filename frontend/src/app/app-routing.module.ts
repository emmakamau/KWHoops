import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonVegeterianComponent } from './non-vegeterian/non-vegeterian.component';
import { VeganComponent } from './vegan/vegan.component';
import { VegeterianComponent } from './vegeterian/vegeterian.component';

const routes: Routes = [

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
