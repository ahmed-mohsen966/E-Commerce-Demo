import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { StoreData } from '../../ViewModels/store-data';
import { StaticProductsService } from '../../Services/static-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnChanges, OnInit {
  orderTotalPrice: number = 0;
  filteredProducts: IProducts[] = [];
  prdList: IProducts[] = [];
  @Input() CatId: number = 0;
  @Output() onTotalPricechanged: EventEmitter<number>;
  @Output() onBuyItem: EventEmitter<StoreData>;
  constructor(private productService: StaticProductsService ) {
    this.onTotalPricechanged = new EventEmitter<number>();
    this.onBuyItem = new EventEmitter<StoreData>();

  }
  ngOnInit(): void {
    this.filteredProducts = this.prdList;
  }
  ngOnChanges(): void {
    //this.ChangeCatFilter();
    this.filteredProducts = this.productService.GetProductByCatId(this.CatId);
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
