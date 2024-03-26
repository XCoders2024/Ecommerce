import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private Url = environment.baseApi;
  constructor(private http: HttpClient) {}
  createNewCart(model: any) {
    return this.http.post(`${this.Url}api/v1/cart/add`, model);
  }
  getCart() {
    return this.http.get(`${this.Url}api/v1/cart`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }

  delItemFromCart(proId) {
    return this.http.delete(`${this.Url}api/v1/cart/del/${proId}`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }
}
