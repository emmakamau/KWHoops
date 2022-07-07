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

@NgModule({
  declarations: [
    AppComponent,
    DietComponent,
    BootcampsComponent,
    VeganComponent,
    VegeterianComponent,
    NonVegeterianComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
