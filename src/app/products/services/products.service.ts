import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../enviroments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private Url = environment.baseApi;
  constructor(private http: HttpClient) {}
  getAllProductServices() {
    return this.http.get(`${this.Url}api/v1/product`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }
  getAllProCategory() {
    return this.http.get(`${this.Url}api/v1/category`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }

  getProductsByCategory(key) {
    return this.http.get(`${this.Url}api/v1/product/category/${key}`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }

  addProducToCart(data) {
    return this.http
      .get(`${this.Url}http://localhost:3000/api/v1/cart/add`)
      .pipe(
        catchError((err) => {
          return throwError(() => err.message || 'ServerError');
        })
      );
  }
  getProductsDetails(key) {
    return this.http.get(`${this.Url}api/v1/product/${key}`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }
}
