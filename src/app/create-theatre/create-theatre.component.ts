import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-theatre',
  templateUrl: './create-theatre.component.html',
  styleUrls: ['./create-theatre.component.css']
})
export class CreateTheatreComponent implements OnInit {
  creazione : boolean = false;
  
  //default settings for the theatre
  nRighePlatea: number = 7;
  nColPlatea: number = 10;
  nRigheStage: number = 4;
  nColStage: number = 6;
  constructor() { }
  
  setcreazione() {
    this.creazione = true;
  }
  ngOnInit() {
  }

}