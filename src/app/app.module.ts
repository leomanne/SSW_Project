import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TheatreService } from './theatre.service';
import { OpenreservationComponent } from './open-reservation/open-reservation.component';
import { GetReservationNameComponent } from './get-reservation/get-reservation.component';
import {CreateTheatreComponent} from './create-theatre/create-theatre.component'

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    OpenreservationComponent,
    GetReservationNameComponent,
    CreateTheatreComponent
  ],
  providers: [TheatreService],
  bootstrap: [AppComponent],
})
export class AppModule {}