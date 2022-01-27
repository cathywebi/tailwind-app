import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { PropertyCardComponent } from './property-card/property-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationCardComponent,
    PropertyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
