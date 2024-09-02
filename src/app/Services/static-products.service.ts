import { Injectable } from '@angular/core';
import { IProducts } from '../Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private prdList: IProducts[];

  constructor() {
    this.prdList = [
      { id: 100, name: 'Dell', price: 5000, quantity: 1, imgURL: "https://fakeimg.pl/200x100", categoryId: 1000 },
      { id: 200, name: 'Lenovo', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 2000 },
      { id: 300, name: 'Mac', price: 10000, quantity: 5, imgURL: "https://fakeimg.pl/200x100", categoryId: 3000 },
      { id: 400, name: 'hp', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 3000 },
      { id: 500, name: 'toshiba', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 1000 },
      { id: 600, name: 'Lenovo 2', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 2000 },
      { id: 700, name: 'Lenovo 3', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 2000 },
      { id: 800, name: 'Lenovo 4', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 1000 },
      { id: 900, name: 'Lenovo 5', price: 25000, quantity: 2, imgURL: "https://fakeimg.pl/200x100", categoryId: 4000 },

    ];
  }

  GetAllProducts(): IProducts[] {
    return this.prdList;
  }

  GetProductByCatId(CatId: number): IProducts[] {
    if (CatId == 0)
      return this.prdList;
    else
      return this.prdList.filter(prd => prd.categoryId == CatId);
  }

  GetProductById(id: number): IProducts | null {
    if (id != null) {
      let prd = this.prdList.find(prd => prd.id == id);
      return prd ? prd : null;
    } else {
      return null;
    }
  }

  Create(prd: IProducts): void {
    this.prdList.push(prd);
  }
}
