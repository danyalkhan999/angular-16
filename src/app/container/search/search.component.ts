import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  updateSearchText(val: any) {
    console.log(val);
    this.searchText = val.target.value;
  }
}
