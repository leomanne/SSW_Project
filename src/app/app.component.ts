import { Component, VERSION } from '@angular/core';
import { TheaterService } from './theatre.service';

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
  constructor(private service: TheaterService) {}
  selezionaEvento(key: string) {
    this.service.getData(key).subscribe({
      next: (x: any) => {
        const theater = JSON.parse(x);
        const numParterreRow = theater[0];
        this.platea = theater.slice(1, numParterreRow + 1);
        this.stage = theater.slice(numParterreRow + 1);
        this.chiaveEventoAttivo = key;
      },
      error: (err) => alert('Chiave inserita non valida!'),
    });
  }
}
