import { Component } from '@angular/core';
import { IProducts } from '../../Models/iproducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
orderTotalPrice:number = 0;
prdList : IProducts[];
constructor(){
  this.prdList =[
    {id:100,name:'Dell' , price: 20000, quantity:5,imgURL: "https://fakeimg.pl/200x100" , categoryId:1},
    {id:100,name:'Lenovo' , price: 25000, quantity:5,imgURL: "https://fakeimg.pl/200x100" , categoryId:2},
    {id:100,name:'Mac' , price: 30000, quantity:5,imgURL: "https://fakeimg.pl/200x100" , categoryId:3}
  ];
}

BuyItem(ProductPrice:number , PrdCount:any){
  let itemsCount:number;
  itemsCount = Number(PrdCount);
  this.orderTotalPrice = itemsCount * ProductPrice;

}
}
