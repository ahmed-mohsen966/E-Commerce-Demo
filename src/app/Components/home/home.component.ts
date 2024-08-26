import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  storeInfo : StoreData;

  constructor(){
    this.storeInfo = new StoreData("amazon store" , "https://picsum.photos/200/300",["Alex", "Giza","Maadi" , "Gouna"]);
  }

}
