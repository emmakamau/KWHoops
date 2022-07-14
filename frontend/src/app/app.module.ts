import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietComponent } from './diet/diet.component';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { VeganComponent } from './vegan/vegan.component';
import { VegeterianComponent } from './vegeterian/vegeterian.component';
import { NonVegeterianComponent } from './non-vegeterian/non-vegeterian.component';
import { ContactComponent } from './contact/contact.component';
import { YogaComponent } from './yoga/yoga.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { RouterModule } from '@angular/router';
import { AngularEmbedVideoModule } from 'angular-embed-video';
import { SafePipe } from './safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserAuthenticationService } from './user-authentication.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingsComponent } from './trainings/trainings.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResetPasswordComponent } from './user-authentication/reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './user-authentication/reset-password-form/reset-password-form.component';
import { LogoutComponent } from './user-authentication/logout/logout.component';

import {AuthGuard} from "./guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    BootcampsComponent,
    DietComponent,
    VeganComponent,
    VegeterianComponent,
    NonVegeterianComponent,
    ContactComponent,
    YogaComponent,
    WorkoutsComponent,
    SafePipe,  
    UserAuthenticationComponent, TrainingsComponent, HomeComponent, NavbarComponent, ResetPasswordComponent, ResetPasswordFormComponent, LogoutComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularEmbedVideoModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'auth', component: UserAuthenticationComponent},
      {path: 'workouts', component: WorkoutsComponent, canActivate: [AuthGuard],},
      {path: 'yoga', component: YogaComponent, canActivate : [AuthGuard],},
      {path: 'training', component: TrainingsComponent, canActivate: [AuthGuard],},
      {path: 'diet', component: DietComponent, canActivate:[AuthGuard]},
      {path: 'bootcamps', component: BootcampsComponent, canActivate:[AuthGuard]},
      {path: 'contact', component: ContactComponent},
    ]),  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
