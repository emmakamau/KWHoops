import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YogaComponent } from './yoga/yoga.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { RouterModule } from '@angular/router';
import { AngularEmbedVideoModule } from 'angular-embed-video';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    YogaComponent,
    WorkoutsComponent,
    SafePipe,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEmbedVideoModule,
    RouterModule.forRoot([
      {path: '', component: YogaComponent},
      {path: 'workouts', component: WorkoutsComponent},
    ]),

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
