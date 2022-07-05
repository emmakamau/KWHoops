import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { DietComponent } from './components/diet/diet.component';

const routes: Routes = [
  {
    path: 'diet',
    component: DietComponent
  },
  
  {
    path: 'bootcamps',
    component: BootcampsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
