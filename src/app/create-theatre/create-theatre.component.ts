import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-theatre',
  templateUrl: './create-theatre.component.html',
  styleUrls: ['./create-theatre.component.css']
})
export class CreateTheatreComponent implements OnInit {
  creation : boolean = false;
  
  //default settings for the theatre
  row_parterre: number = 7;
  column_parterre: number = 10;
  row_stage: number = 4;
  column_stage: number = 6;
  constructor() { }
  
  createShow() {
    this.creation = true;
  }
  ngOnInit() {
  }

}