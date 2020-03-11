import { Component } from '@angular/core';
import { Card } from './card.object';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private cards: Array<Card> = [];

  public onClickApply(value1: string, value2: string): void {
    // if values are empty, early exit out of function
    if (value1 === '' && value2 === '') {
      return;
    }
    const newCard: Card = new Card(value1, value2);
    this.cards.push(newCard);
  }
}
