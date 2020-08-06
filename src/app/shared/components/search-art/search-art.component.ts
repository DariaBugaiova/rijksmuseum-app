import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-art',
  templateUrl: './search-art.component.html',
  styleUrls: ['./search-art.component.scss']
})
export class SearchArtComponent {
  @Output() searchName = new EventEmitter<string>();
  @Output() clearSearch = new EventEmitter<null>();

  search(term: string): void {
      this.clear(term);
      this.searchName.emit(term);
  }

  clear(term: string): void {
    if (!term) {
      this.clearSearch.emit();
      return;
    }
  }
}
