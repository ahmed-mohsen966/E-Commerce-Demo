import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { IProducts } from '../../Models/iproducts';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  selectdCatId: number = 0;
  catList: ICategory[];
  newPrd: IProducts = {} as IProducts;
  constructor(private productService: ProductsService) {
    this.catList = [
      { id: 1000, name: "Laptop" },
      { id: 2000, name: "Tablet" },
      { id: 3000, name: "PC" },
      { id: 4000, name: "Other" },
    ]
  }

  addProduct() {
    this.productService.Add(this.newPrd).subscribe();
  }

}
