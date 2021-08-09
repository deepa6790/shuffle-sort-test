import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../interfaces/card.interface';

@Injectable()

export class SharedService {
   items: Card[]  = [
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

  private cardSource = new BehaviorSubject<any>(this.items);
  card = this.cardSource.asObservable()
  constructor() {

   }

  changeCard(card: any) {
    this.cardSource.next(card);
    console.log(card);
  }
}
