import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { StoreData } from '../../ViewModels/store-data';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements AfterViewInit {
  catList: ICategory[];
  selectdCatId: number = 0;
  orderTotalPrice: number = 0;
  buyItems: StoreData[];

  @ViewChild('ClientNameInput') clientNameElem!: ElementRef;
  constructor() {
    this.buyItems = [];
    this.catList = [
      { id: 1000, name: "Laptop" },
      { id: 2000, name: "Tablet" },
      { id: 3000, name: "PC" },
      { id: 4000, name: "Other" },
    ]
  }
  ngAfterViewInit(): void {
    this.clientNameElem.nativeElement.value = "Enter your name here";
  }

  onTotalPriceChanged(totalPrice: number) {
    this.orderTotalPrice = totalPrice;
  }
  onBuyItem(product: StoreData) {
    this.buyItems.push(product);
    this.orderTotalPrice = product.Price * product.quantity;
  }
}
