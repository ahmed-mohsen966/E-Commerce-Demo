import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProducts } from '../../Models/iproducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnChanges, OnInit {
  orderTotalPrice: number = 0;
  prdList: IProducts[];
  filteredProducts: IProducts[] = [];
  @Input() CatId: number = 0;

  constructor() {
    this.prdList = [
      { id: 100, name: 'Dell', price: 5000, quantity: 1, imgURL: "https://fakeimg.pl/200x100", categoryId: 1000 },
      { id: 100, name: 'Lenovo', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 2000 },
      { id: 100, name: 'Mac', price: 10000, quantity: 5, imgURL: "https://fakeimg.pl/200x100", categoryId: 3000 },
      { id: 100, name: 'hp', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 3000 },
      { id: 100, name: 'toshiba', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 1000 },
      { id: 100, name: 'Lenovo 2', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 2000 },
      { id: 100, name: 'Lenovo 3', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 2000 },
      { id: 100, name: 'Lenovo 4', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 1000 },
      { id: 100, name: 'Lenovo 5', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 4000 },

    ];
  }
  ngOnInit(): void {
    this.filteredProducts = this.prdList;
  }
  ngOnChanges(): void {
    debugger
    this.ChangeCatFilter();
  }

  BuyItem(ProductPrice: number, PrdCount: any) {
    let itemsCount: number;
    itemsCount = Number(PrdCount);
    this.orderTotalPrice = itemsCount * ProductPrice;

  }

  private ChangeCatFilter() {
    if (this.CatId == 0)
      this.filteredProducts = this.prdList;
    else
      this.filteredProducts = this.prdList.filter(prd => prd.categoryId == this.CatId);
  }
}
