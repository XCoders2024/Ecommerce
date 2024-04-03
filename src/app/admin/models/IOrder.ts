import { OrderStatus } from "./order-status.enum";

export interface IOrder{
  userEmail:string,
  date:Date,
  totalPrice:number,
  productTitle:string,
  state:OrderStatus

}