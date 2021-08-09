import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import {SharedService} from '../../services/shared.service'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  card!: Card[];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.card.subscribe(result => {
      this.card = result;
    });
  }
  onSort(){
    const result = this.card.sort((a, b) => a.value > b.value && 1 || -1);
    console.log(result);
    this.sharedService.changeCard(result);

  }

}
