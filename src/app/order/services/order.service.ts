import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/environment.development';
import { Iorder } from '../models/orderData';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  postInformationDetails(data: any) {
    return this.httpClient.patch(`${environment.baseApi}/user`, data);
  }

  addOrder(data: Iorder) {
    return this.httpClient.post(`${environment.baseApi}/order`, data);
  }
  updatePaymentOrder(data: { id: string; payment: string }) {
    return this.httpClient.patch(`${environment.baseApi}/order/payment`, data);
  }
}
