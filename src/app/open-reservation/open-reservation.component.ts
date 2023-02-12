import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Seat } from '../app.component';

@Component({
  selector: 'app-openreservation',
  templateUrl: './open-reservation.component.html',
  styleUrls: ['./open-reservation.component.css'],
})
export class OpenreservationComponent implements OnInit {

  @Input() platea: any[] | undefined;
  @Input() stage: any[] | undefined;
  @Input() bookerName: string | undefined;
  @Input() fastReservation: boolean = false;
  @Output() postoSelezionato = new EventEmitter<any>();

  //struttura usata per salvare un posto a sedere
  seat: { riga: number; colonna: number; posizione: string; oldName: string } =
    undefined;
  constructor() {}

  ngOnInit() {}
  /**
   * Metodo usato per fare una send di un posto a sedere
   */
  addSeat(riga: number, colonna: number, posizione: string, oldName: string) {
    this.seat = { riga, colonna, posizione, oldName };
    this.postoSelezionato.emit(this.seat);
  }

  colorSeat(seat: string, riga: number, colonna: number, posizione: string) {
    if (seat === 'x') {
      if (this.seat != undefined) {
        if (this.seat.riga == riga && this.seat.colonna == colonna && this.seat.posizione == posizione && !this.fastReservation
        ) {
          return 'green';
        }
      }
      return '#8FBC8F';
    } else {
      return '#FF6347';
    }
  }
}
