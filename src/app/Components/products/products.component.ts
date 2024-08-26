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
constructor(){
  this.prdList =[
    {id:100,name:'Dell' , price: 20000, quantity:1,imgURL: "https://fakeimg.pl/200x100" , categoryId:1},
    {id:100,name:'Lenovo' , price: 25000, quantity:5,imgURL: "https://fakeimg.pl/200x100" , categoryId:2},
    {id:100,name:'Mac' , price: 30000, quantity:5,imgURL: "https://fakeimg.pl/200x100" , categoryId:3}
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
ChangeCat(){
  this.selectdCatId = 1000;
}
}
