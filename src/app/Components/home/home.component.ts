import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { error } from 'console';
import { unsubscribe } from 'diagnostics_channel';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  //storeInfo: StoreData;
  private adsSubscriptions: Subscription[] = [];
  constructor(private promoAds: PromotionAdsService) {
    //this.storeInfo = new StoreData("amazon store", "https://picsum.photos/200/300", ["Alex", "Giza", "Maadi", "Gouna"]);
  }

  ngOnInit(): void {
    let observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (data: string) => {
        console.log(data);
      },
      complete: () => {
        console.log("ads finished");
      }
    }
    let filterAds = this.promoAds.getSchecduleAds(3).pipe(
      filter(ad => ad.includes("white friday"))
      , map(ad => "Ad : " + ad)
    );
    let sub = filterAds.subscribe(observer);
    this.adsSubscriptions.push(sub);
    // adsSubscription.unsubscribe();
  }
  ngOnDestroy(): void {
    for (let subscription of this.adsSubscriptions) {
      subscription.unsubscribe();
    }
  }

}
