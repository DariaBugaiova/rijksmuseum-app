import {Component, Input} from '@angular/core';
import { ArtObject } from '../../../shared/interface/art-object';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() artObject: ArtObject;
}
