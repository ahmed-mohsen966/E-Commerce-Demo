import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList: string[];
  constructor() {
    this.adsList = [
      "Big dsicounts",
      "Sale Up to 50%",
      "check our white friday offers",
      // "",
      "Special white friday offers up to 70%"
    ]
  }

  getSchecduleAds(intervalInSec: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter: number = 0;
      let adsTimer = setInterval(() => {
        if (counter == this.adsList.length) {
          observer.complete();
        }
        if (this.adsList[counter] == "") {
          observer.error("Error: Empty Add!!")
        }
        observer.next(this.adsList[counter]);
        counter++;
      }, intervalInSec * 1000);
      return {
        unsubscribe() {
          clearInterval(adsTimer);

        }
      };
    });
  }
}
