import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import {SharedService} from '../../services/shared.service'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  items!: Card[];
  ngOnInit(): void {
 this.sharedService.card.subscribe(result => {
    this.items = result;
  });
  }

}
