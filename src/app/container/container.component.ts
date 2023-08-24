import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // listOfString: string[] = ['Mark', 'Jhon', 'Carl', 'Tony', 'Peter'];

  searchText: string = '';

  setSearchText(data: string) {
    // console.log(data);
    this.searchText = data;
  }
}
