import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../Models/iproducts';
import { StaticProductsService } from '../../Services/static-products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prdId: number = 0;
  product: IProducts | null = null;
  constructor(private activatedRoute: ActivatedRoute , private staticProductService : StaticProductsService
    , private location: Location
  ) {

  }

  ngOnInit() {
    this.prdId = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    this.product = this.staticProductService.GetProductById(this.prdId);
  }
  Back(){
    this.location.back();
  }
}
