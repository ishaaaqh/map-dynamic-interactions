import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapInteractionComponent } from './map-interaction/map-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    MapInteractionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
