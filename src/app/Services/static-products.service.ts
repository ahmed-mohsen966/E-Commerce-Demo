import { Injectable, numberAttribute } from '@angular/core';
import { IProducts } from '../Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private prdList: IProducts[];
  constructor() {
    this.prdList = [
      { id: 100, Name: 'Dell', Price: 5000, Quantity: 1, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 1000 },
      { id: 200, Name: 'Lenovo', Price: 25000, Quantity: 2, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 2000 },
      { id: 300, Name: 'Mac', Price: 10000, Quantity: 5, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 3000 },
      { id: 400, Name: 'hp', Price: 25000, Quantity: 2, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 3000 },
      { id: 500, Name: 'toshiba', Price: 25000, Quantity: 2, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 1000 },
      { id: 600, Name: 'Lenovo 2', Price: 25000, Quantity: 2, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 2000 },
      { id: 700, Name: 'Lenovo 3', Price: 25000, Quantity: 2, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 2000 },
      { id: 800, Name: 'Lenovo 4', Price: 25000, Quantity: 2, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 1000 },
      { id: 900, Name: 'Lenovo 5', Price: 25000, Quantity: 2, ImgURL: "https://fakeimg.pl/200x100", CategoryID: 4000 },

    ];
  }

  GetAllProducts(): IProducts[] {
    return this.prdList;
  }

  GetProductByCatId(CatId: number): IProducts[] {
    if (CatId == 0)
      return this.prdList;
    else
      return this.prdList.filter(prd => prd.CategoryID == CatId);
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

  getPrdIds():number []{
    let prdIds: number[] = this.prdList.map(prd => prd.id);
    return prdIds;
  }
}
