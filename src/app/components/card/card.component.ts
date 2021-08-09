import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() {
  }

  items!: Card[];
  ngOnInit(): void {

   this.items  = [
      {value:1, color:'lblue'},
      {value:2, color:'mblue'},
      {value:3, color:'dblue'},
      {value:4, color:'mblue'},
      {value:5, color:'dblue'},
      {value:6, color:'grey'},
      {value:7, color:'grey'},
      {value:8, color:'lblue'},
      {value:9, color:'dblue'},
  ];

  }

}
