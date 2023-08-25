import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  // 1 Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  // Optional 2nd argument of @viewChild()
  // 1. read: use it to read the different token from the queried elements.
  // 2. static: determines when the query is resolved.
  // True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.
  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged() {}

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
