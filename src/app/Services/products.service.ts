import { Injectable } from '@angular/core';
import { IProducts } from '../Models/iproducts';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  GetAll(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${environment.baseURL}/products`);
  }

  GetById(Id: number): Observable<IProducts> {
    return this.httpClient.get<IProducts>(`${environment.baseURL}/products/${Id}`);
  }
  GetByCatId(Id: number): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${environment.baseURL}/products?categoryID=${Id}`);
  }

  Add(product: IProducts): Observable<IProducts> {
    // product = {
    //   id: 40,
    //   Name: 'iphone 15 pro',
    //   Price: 9000,
    //   Quantity: 90,
    //   CategoryID: 3
    // }
    return this.httpClient
      .post<IProducts>(`${environment.baseURL}/products`, JSON.stringify(product), this.httpOption)
      .pipe(
        retry(2)
        , catchError(this.handleError)
      )
  }

  Update(produts: IProducts) {

  }

  Delete(Id: number) {

  }

  handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error('An error occured : ', error.error);
    }
    else {
      console.error(
        `Backend returned code ${error.status}`, `Body was: `, error.error
      )
    }
    return throwError(
      () => new Error('Error occured, pleas try again')
    )
  }
}
