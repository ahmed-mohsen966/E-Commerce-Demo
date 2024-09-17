import { Injectable } from '@angular/core';
import { IProducts } from '../Models/iproducts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  GetAll(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${environment.baseURL}/products`);
  }

  GetById(Id: number): Observable<IProducts> {
    return this.httpClient.get<IProducts>(`${environment.baseURL}/products/${Id}`);
  }
  GetByCatId(Id: number): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${environment.baseURL}/products?categoryID=${Id}`);
  }

  Add(product: IProducts) {

  }

  Update(produts: IProducts) {

  }

  Delete(Id: number) {

  }
}
