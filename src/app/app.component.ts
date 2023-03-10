import { Component, VERSION } from '@angular/core';
import { TheatreService } from './theatre.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'Pagina prenotazione biglietti';
  prenotazione: boolean = false; //usato per abilitare il form 
  listaEventi: string[] = [];
  platea: any[] = []; //array generico che contiene i posti in platea
  stage: any[] = [];  //uguale
  fastReservation: boolean = false; //variabile booleana per capire se e' stata richiesta una reservation rapida
  chiaveEventoAttivo: string; //codice di evento attivo ora
  nomePrenotatore: string; //nome della prenotazione attiva
  notifica: string; //stringa utilizzata per stampare le informazioni degli spettacoli creati
  seat = new Seat(undefined);; //struttura dati usata per salvare un posto a sedere

    
    setNuovoPosto(newSeat: Seat ) {
      this.seat = newSeat;
      if (this.fastReservation && this.seat.oldName == 'x') {
        this.confirmReservation();
      }
    }

    /**
     * metodo usato per abilitare il form settando la variabile a true
     */
  setReservation() { 
    this.prenotazione = true;
  }
  constructor(private service: TheatreService) {}


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
  /**
   * Metodo per inserire in listaEventi il codice di un nuovo evento
   */
  setTheatre(val : string){
    this.listaEventi.push(val);
  }
  /**
   * Metodo di conferma
   */
  confirmReservation() {
    //checkers
    if (this.seat == undefined) {
      alert('Posto non selezionato!');
      return;
    }
    if (this.nomePrenotatore == undefined) {
      alert('Nome prenotazione non inserito!');
      return;
    }
    //sostituisci 'x' col nome della persona
    if (this.seat.posizione == 'platea') {
      this.platea[this.seat.riga][this.seat.colonna] = this.nomePrenotatore;
    } else {
      this.stage[this.seat.riga][this.seat.colonna] = this.nomePrenotatore;
    }

    const newTheaterTmp = this.platea.concat(this.stage);
    const num_slice: any[] = [this.platea.length];
    const newTheater = num_slice.concat(newTheaterTmp);
    this.service.setData(this.chiaveEventoAttivo, newTheater).subscribe({
      next: (x: any) => {
        this.notifica =
          'Prenotazione del posto ' + (this.seat.colonna + 1) +
          ' in fila ' + (this.seat.riga + 1) +' nella sezione ' + this.seat.posizione +' avvenuta con successo!';
        this.seat = undefined;
      },
      error: (err) => {
        alert(`Errore: ${JSON.stringify(err)}`);
      },
    });
  }

  //class used as a structure
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
  //getters
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

