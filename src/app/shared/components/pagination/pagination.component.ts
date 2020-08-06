import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {newArray} from '@angular/compiler/src/util';
import {Pagination} from '../../interface/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  public pagesArray: Array<number> = [];
  public currentPage: number = 1;
  public currentSize: number = 10;
  public itemsControl: number[] = [10, 50, 100];

  @Output() goToPage = new EventEmitter<Pagination>();

  @Input() set setPagination(itemsCount) {
    if (itemsCount) {
      const pagesAmount = Math.ceil(
        itemsCount / this.currentSize);
      this.pagesArray = new Array(pagesAmount).fill(1);
    }
  }

  public setPage(pageNumber: number): void {
    if (pageNumber === this.currentPage) {
      return;
    }
    this.currentPage = pageNumber;
    this.goToPage.emit({ pages: pageNumber, pageSize: this.currentSize});
  }

  public setSize(size: number): void {
    if (size === this.currentSize) {
      return;
    }
    this.currentSize = size;
    this.goToPage.emit({ pages: this.currentPage, pageSize: size});
  }
}
