import { Component, Input } from '@angular/core';
import { cardSizes } from 'src/app/home-page/enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ["./card-wide.scss", "./card-small.scss", "./card-medium.scss"]
})
export class CardComponent {
  @Input() size: cardSizes | undefined;

  constructor() { }

}
