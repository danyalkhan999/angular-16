import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // listOfString: string[] = ['Mark', 'Jhon', 'Carl', 'Tony', 'Peter'];

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(data: string) {
    // console.log(data);
    this.searchText = data;
  }
}
