import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YogaComponent } from './yoga/yoga.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { RouterModule } from '@angular/router';
import { AngularEmbedVideoModule } from 'angular-embed-video';
import { SafePipe } from './safe.pipe';


import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserAuthenticationService } from './user-authentication.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    YogaComponent,
    WorkoutsComponent,
    SafePipe,   
    UserAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEmbedVideoModule,
    RouterModule.forRoot([
      {path: '', component: YogaComponent},
      {path: 'workouts', component: WorkoutsComponent},
    ]),

  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
