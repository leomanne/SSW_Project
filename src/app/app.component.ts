import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prenotazione biglietti';
  
  reservation: boolean = false; //used to enable form 

  
  setReservation() { 
    this.reservation = true;
  }
}
