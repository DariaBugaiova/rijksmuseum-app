import { Component, EventEmitter, Output } from '@angular/core';
import { SortTypeEnum } from './sort-type.enum';

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.scss']
})
export class OrderByComponent {
  @Output() orderBy = new EventEmitter<string>();
  @Output() clearSearch = new EventEmitter<null>();

  sortType = SortTypeEnum;

  order(term: string): void {
    if (!term) {
      this.clearSearch.emit();
      return;
    } else if (term.length > 3) {
      if (this.sortType[this.sortType[term.toLowerCase()]]) {
        this.orderBy.emit(term);
      }
    }
  }
}
