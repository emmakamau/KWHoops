import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietComponent } from './components/diet/diet.component';
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { VeganComponent } from './components/vegan/vegan.component';
import { VegeterianComponent } from './components/vegeterian/vegeterian.component';
import { NonVegeterianComponent } from './components/non-vegeterian/non-vegeterian.component';
import { ContactComponent } from './components/contact/contact.component';
import { YogaComponent } from './yoga/yoga.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { RouterModule } from '@angular/router';
import { AngularEmbedVideoModule } from 'angular-embed-video';
import { SafePipe } from './safe.pipe';


import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserAuthenticationService } from './user-authentication.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingsComponent } from './trainings/trainings.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BootcampsComponent,
    VeganComponent,
    VegeterianComponent,
    NonVegeterianComponent,
    ContactComponent,
    YogaComponent,
    SafePipe,   
    UserAuthenticationComponent, TrainingsComponent, HomeComponent, NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEmbedVideoModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'auth', component: UserAuthenticationComponent},
      {path: 'workouts', component: WorkoutsComponent},
      {path: 'yoga', component: YogaComponent},
      {path: 'training', component: TrainingsComponent},
    ]),  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
