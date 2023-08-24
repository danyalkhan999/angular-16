import { Component, EventEmitter, Output } from '@angular/core';

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

  onSearchTextChanged() {}

  updateSearchText(input: HTMLInputElement) {
    this.searchText = input.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
