import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../../Models/iproducts';
import { StaticProductsService } from '../../Services/static-products.service';
import { Location } from '@angular/common';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prdId: number = 0;
  product: IProducts | null = null;
  productIds: number[] = [];
  constructor(private activatedRoute: ActivatedRoute, private staticProductService: StaticProductsService
    , private location: Location
    , private route: Router
  ) {

  }

  ngOnInit() {
    // this.prdId = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    // this.product = this.staticProductService.GetProductById(this.prdId);
    this.productIds = this.staticProductService.getPrdIds();

    //when navigate to same component will not reload component
    // even if their is changes in route paramaters
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.prdId = Number(paramMap.get('pid'));
      this.product = this.staticProductService.GetProductById(this.prdId);
    })
  }
  Back() {
    this.location.back();
  }
  Previous() {
    let currentIndex: number = this.productIds.findIndex((element) => element == this.prdId);
    let prevPrdId ;
    if (currentIndex > 0) {
      prevPrdId = this.productIds[currentIndex - 1];
      this.route.navigate(['/ProductDetails', prevPrdId]);
    }
  }
  Next() {
    let currentIndex: number = this.productIds.findIndex((element) => element == this.prdId);
    let nextPrdId;
    if (currentIndex < this.productIds.length) {
      nextPrdId = this.productIds[currentIndex + 1];
      this.route.navigate(['/ProductDetails', nextPrdId]);
    }
  }
}
