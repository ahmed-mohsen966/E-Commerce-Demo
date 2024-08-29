import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { StoreData } from '../../ViewModels/store-data';

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
  @Output() onTotalPricechanged: EventEmitter<number>;
  @Output() onBuyItem: EventEmitter<StoreData>;
  constructor() {
    this.onTotalPricechanged = new EventEmitter<number>();
    this.onBuyItem = new EventEmitter<StoreData>();
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
    this.ChangeCatFilter();
  }

  BuyItem(id: number, PrdCount: any) {
    let itemsCount: number;
    itemsCount = Number(PrdCount);
    let product: any = this.prdList.find(prd => prd.id == id);
    this.orderTotalPrice += itemsCount * (product != undefined ? (product as IProducts).price : 0);
    this.onTotalPricechanged.emit(product);
    let item: StoreData = { name: product.name, Price: product.price, quantity: PrdCount, categoryId: product.categoryId }
    this.onBuyItem.emit(item);

  }

  private ChangeCatFilter() {
    this.orderTotalPrice = 0;
    if (this.CatId == 0)
      this.filteredProducts = this.prdList;
    else
      this.filteredProducts = this.prdList.filter(prd => prd.categoryId == this.CatId);
  }
}
