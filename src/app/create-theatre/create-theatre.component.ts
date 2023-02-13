import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-create-theatre',
  templateUrl: './create-theatre.component.html',
  styleUrls: ['./create-theatre.component.css'],
})
export class CreateTheatreComponent implements OnInit {
  @Output() creaEvento = new EventEmitter<string>();
  creazione: boolean = false;

  //setting di default per il teatro 
  nRighePlatea: number = 7;
  nColPlatea: number = 10;
  nRigheStage: number = 4;
  nColStage: number = 6;
  notifica: string; //stringa usata per restituire il messaggio di conferma creazione
  constructor(private service: TheatreService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   * SETTERS
   */
  setcreazione() {
    this.creazione = true;
  }

  setnRighePlatea(value: string) {
    this.nRighePlatea = parseFloat(value); //parso il valore passato
  }

  setnColPlatea(value: string) {
    this.nColPlatea = parseFloat(value); //
  }

  setnRigheStage(value: string) {
    this.nRigheStage = parseFloat(value); //
  }

  setnColStage(value: string) {
    this.nColStage = parseFloat(value); //
  }

  /**
   * Metodo per costruire lo spettacolo
   */
  confermaCreazione() {
    this.service.newData().subscribe({ //faccio la subscribe per newData
      next: (x: any) => { //e definisco il metodo next
        const chiave = x;
        //riempio l'array con ''
        const theater = new Array(this.nRighePlatea)
          .fill('')
          .map(() => Array(this.nColPlatea).fill('x'))//per ogni elemento ci metto un array con ncolPlatea elementi e setto 'x' come elemento
          .concat( //concateno i due array
            new Array(this.nRigheStage) //secondo array simile al precedente
              .fill('')
              .map(() => Array(this.nColStage).fill('x'))
          );
        const num_slice: any[] = [this.nRighePlatea];
        const infoTheater = num_slice.concat(theater);
        this.service.setData(chiave, infoTheater).subscribe({ //subscribe per setData
          next: (x: any) => {
            this.creaEvento.emit(chiave);
            this.notifica =
              'Nuovo spettacolo creato codice: ["' +
              chiave +
              '"]';
          },
          error: (err) => {
            alert(`Errore: ${JSON.stringify(err)}`);
          },
        });
      },
      error: (err) => {
        alert(`Errore: ${JSON.stringify(err)}`);
      },
    });
    this.creazione = false;
  }
}
