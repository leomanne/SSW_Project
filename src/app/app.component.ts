import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prenotazione biglietti';
  
  reservation: boolean = false; //used to enable form 
  listaEventi: string[] = ['422d9016'];
  platea: any[] = []; //generic array
  stage: any[] = []; //generic array 
  chiaveEventoAttivo: string; //key di evemto attivo ora
  bookerName: string; //nome della prenotazione attiva
  setReservation() { 
    this.reservation = true;
  }
}
