import { Component } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
orderTotalPrice:number = 0;
prdList : IProducts[];
catList: ICategory[];
selectdCatId:number = 0;
filteredProducts: IProducts[] = [];
constructor(){
  this.prdList =[
    {id:100,name:'Dell' , price: 5000, quantity:1,imgURL: "https://fakeimg.pl/200x100" , categoryId:1000},
    {id:100,name:'Lenovo' , price: 25000, quantity:2,imgURL: "https://fakeimg.pl/200x100" , categoryId:2000},
    {id:100,name:'Mac' , price: 10000, quantity:5,imgURL: "https://fakeimg.pl/200x100" , categoryId:3000},
    {id:100,name:'hp' , price: 25000, quantity:2,imgURL: "https://fakeimg.pl/200x100" , categoryId:3000},
    {id:100,name:'toshiba' , price: 25000, quantity:2,imgURL: "https://fakeimg.pl/200x100" , categoryId:1000},
    {id:100,name:'Lenovo 2' , price: 25000, quantity:2,imgURL: "https://fakeimg.pl/200x100" , categoryId:2000},
    {id:100,name:'Lenovo 3' , price: 25000, quantity:2,imgURL: "https://fakeimg.pl/200x100" , categoryId:2000},
    {id:100,name:'Lenovo 4' , price: 25000, quantity:2,imgURL: "https://fakeimg.pl/200x100" , categoryId:1000},
    {id:100,name:'Lenovo 5' , price: 25000, quantity:2,imgURL: "https://fakeimg.pl/200x100" , categoryId:4000},

  ];

  this.catList = [
    {id:1000,name:"Laptop"},
    {id:2000,name:"Tablet"},
    {id:3000,name:"PC"},
    {id:4000,name:"Other"},
  ]
}

BuyItem(ProductPrice:number , PrdCount:any){
  let itemsCount:number;
  itemsCount = Number(PrdCount);
  this.orderTotalPrice = itemsCount * ProductPrice;

}
// ChangeCat(){
//   this.selectdCatId = 1000;
// }
ChangeCatFilter(){
  debugger
  this.filteredProducts = this.prdList.filter(prd => prd.categoryId == this.selectdCatId);
}
}
