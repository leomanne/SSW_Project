import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-reservation',
  templateUrl: './get-reservation.component.html',
  styleUrls: ['./get-reservation.component.css'],
})
export class GetReservationNameComponent implements OnInit {
  @Input() key: string ;
  @Output() newBookerName = new EventEmitter<string>();
  @Output() isFastReservation = new EventEmitter<boolean>();
  
  name: string; //stringa per il nome del prenotatore
  fastReservation: boolean = false; //variabile booleana per sapere se e' richiesta una prenotazione rapida

  constructor() {}

  ngOnInit() {}
  /**
   * Metodo per cambiare il nome selezionato
   */
  cambiaNome(Name: string) {
    if (Name != '') {
      this.name = Name;
      this.newBookerName.emit(this.name); //faccio il send della stringa attraverso l'Event mitter
    }
  }
  /**
   * setta il valore della richiesta prenotazione rapida e manda con un send il valore booleano
   */
  setFastReservation(val: boolean) {
    this.fastReservation = val;
    this.isFastReservation.emit(this.fastReservation);
  }
}