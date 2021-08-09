import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.scss']
})
export class ShuffleComponent implements OnInit {
  card!: Card[];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.card.subscribe(result => {
      this.card = result;
    });
  }

  onShuffle(){
    const shuffledArr = this.card.sort( () => Math.random() - 0.5);
   this.sharedService.changeCard(shuffledArr);
}
}
