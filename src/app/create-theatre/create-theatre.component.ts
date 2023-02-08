import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TheaterService } from '../theatre.service';

@Component({
  selector: 'app-create-theatre',
  templateUrl: './create-theatre.component.html',
  styleUrls: ['./create-theatre.component.css']
})
export class CreateTheatreComponent implements OnInit {

  creazione : boolean = false;
  @Output() creaEvento = new EventEmitter<string>();
  //default settings for the theatre 7x10,4x6
  nRighePlatea: number = 7;
  nColPlatea: number = 10;
  nRigheStage: number = 4;
  nColStage: number = 6;
  notifica: string;
  constructor(private service: TheaterService) {}
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
    this.nColPlatea = parseFloat(value);// 
  }

  setnRigheStage(value: string) {
    this.nRigheStage = parseFloat(value);//
  }

  setnColStage(value: string) {
    this.nColStage = parseFloat(value);//
  }

  confermaCreazione() {
    this.service.newData().subscribe({
      next: (x: any) => {
        const chiave = x;
        const theater = new Array(this.nRighePlatea)
          .fill('')
          .map(() => Array(this.nColPlatea).fill('x'))
          .concat(
            new Array(this.nRigheStage)
              .fill('')
              .map(() => Array(this.nColStage).fill('x'))
          );
        const num_slice: any[] = [this.nRighePlatea];
        const infoTheater = num_slice.concat(theater);
        this.service.setData(chiave, infoTheater).subscribe({
          next: (x: any) => {
            this.creaEvento.emit(chiave);

            this.notifica =
              'nuovo spettacolo creato codice: "' +
              chiave +
              '" con numero di posti in platea: ' +
              this.nRighePlatea +
              ' con numero file:' +
              this.nColPlatea +
              ' posti e un palco di: ' +
              this.nRigheStage +
              ' file di:' +
              this.nColStage +
              ' posti';
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