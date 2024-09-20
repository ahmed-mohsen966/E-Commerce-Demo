import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { StoreData } from '../../ViewModels/store-data';
import { StaticProductsService } from '../../Services/static-products.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { debug } from 'console';

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
  constructor(private productService: StaticProductsService
    , private ProductsService: ProductsService
    , private route: Router
  ) {
    this.onTotalPricechanged = new EventEmitter<number>();
    this.onBuyItem = new EventEmitter<StoreData>();

  }
  ngOnInit(): void {
    //this.filteredProducts = this.productService.GetAllProducts();
    this.ProductsService.GetAll().subscribe(products => {
      this.filteredProducts = products
      console.log(products);
    })

  }
  ngOnChanges(): void {
    //this.ChangeCatFilter();
    //this.filteredProducts = this.productService.GetProductByCatId(this.CatId);
    this.ProductsService.GetByCatId(this.CatId).subscribe(products => {
      this.filteredProducts = products
    })
  }

  BuyItem(id: number, PrdCount: any) {
    let itemsCount: number;
    itemsCount = Number(PrdCount);
    let product: any = this.prdList.find(prd => prd.id == id);
    this.orderTotalPrice += itemsCount * (product != undefined ? (product as IProducts).Price : 0);
    this.onTotalPricechanged.emit(product);
    let item: StoreData = { name: product.name, Price: product.price, quantity: PrdCount, categoryId: product.categoryId }
    this.onBuyItem.emit(item);

  }

  view(id: number) {
    debugger
    this.route.navigate(['ProductDetails', id]);
  }
  private ChangeCatFilter() {
    this.orderTotalPrice = 0;
    if (this.CatId == 0)
      this.filteredProducts = this.prdList;
    else
      this.filteredProducts = this.prdList.filter(prd => prd.CategoryID == this.CatId);
  }
}
