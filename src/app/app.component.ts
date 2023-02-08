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
  platea: any[] = [];//generic array
  stage: any[] = []; //generic array 

  chiaveEventoAttivo: string; //key di evento attivo ora
  bookerName: string; //nome della prenotazione attiva
  //seat: { row: number; column: number; place: string; oldName: string } =
  //undefined;
  setReservation() { 
    this.reservation = true;
  }
  constructor(private service: TheaterService) {}
  selezionaEvento(key: string) {
    this.service.getData(key).subscribe({
      next: (x: any) => {
        const teatro = JSON.parse(x); //faccio parsing per ricavare i num posti platea
        const numpostiplatea = teatro[0];
        this.platea = teatro.slice(1, numpostiplatea + 1);
        this.stage = teatro.slice(numpostiplatea + 1);
        this.chiaveEventoAttivo = key;
      },
      error: (err) => alert('Chiave invalida!'), //
    });
  }
  
}
export class Seat {
riga: number;
colonna: number;
posizione: string;
oldName: string;
  constructor(val) {
    this.riga = val;
    this.colonna = val;
    this.posizione = val;
    this.oldName = val;
  }
  //getters but not used
  getRiga(){
    return this.riga;
  }
  getColonna(){
    return this.colonna;
  }
  getPosizione(){
    return this.posizione;
  }
  getoldName(){
    return this.oldName;
  }

  //setters
  setRiga(val){
    this.riga = val;
  }
  setColonna(val){
     this.colonna = val;
  }
  setPosizione(val){
    this.posizione = val;
  }
  setoldName(val){
    this.oldName = val;
  }

}

