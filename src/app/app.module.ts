import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MattressesComponent } from './components/mattresses/mattresses.component';
import { BedbasesComponent } from './components/bedbases/bedbases.component';

@NgModule({
  declarations: [
    AppComponent,
    MattressesComponent,
    BedbasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
