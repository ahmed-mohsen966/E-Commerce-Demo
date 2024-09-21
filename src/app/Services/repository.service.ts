import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { validateHeaderName } from 'http';
import { catchError, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  private SetHeader(key: string, value: string) {
    this.httpOption.headers.set(key, value);
  }

  GetAll(ApiRoute: string) {
    this.httpClient.get(`${environment.baseURL}/${ApiRoute}`)
    .pipe(
      retry(2)
      ,catchError(this.handleError)
    )
  }

  Search(...searchItems: string[]){
    
  }
  GetById(id: number) {

  }
  GetByCatId() {

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
