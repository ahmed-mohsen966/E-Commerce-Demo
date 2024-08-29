import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  catList: ICategory[];
  selectdCatId: number = 0;
  orderTotalPrice: number = 0;
  constructor() {
    this.catList = [
      { id: 1000, name: "Laptop" },
      { id: 2000, name: "Tablet" },
      { id: 3000, name: "PC" },
      { id: 4000, name: "Other" },
    ]
  }
}
