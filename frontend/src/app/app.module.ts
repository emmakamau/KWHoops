import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietComponent } from './components/diet/diet.component';
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';

@NgModule({
  declarations: [
    AppComponent,
    DietComponent,
    BootcampsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
