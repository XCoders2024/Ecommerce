import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.getCartProduct();

    console.log(this.total);
  }
  constructor(private services: CartService) {}
  total: any = 0;
  cartProducts: any[] = [];
  user: any;
  getCartProduct() {
    this.services.getCart().subscribe((data: any) => {
      this.cartProducts = data;
      console.log(data);
    });
    this.getTotal();
  }
  getTotal() {
    this.services.getCart().subscribe((data: any) => {
      this.cartProducts = data;
      for (let i = 0; i < this.cartProducts.length; i++) {
        this.total +=
          parseInt(this.cartProducts[i].proPrice) *
          parseInt(this.cartProducts[i].quantity);
      }
    });
  }

  plusItem(i) {
    this.cartProducts[i].quantity++;
    window.localStorage.cartProduct = JSON.stringify(this.cartProducts);
    this.getTotal();
  }
  minItem(i) {
    this.cartProducts[i].quantity--;
    window.localStorage.cartProduct = JSON.stringify(this.cartProducts);
    this.getTotal();
  }
  deleteAllFun() {
    this.cartProducts = [];
    window.localStorage.cartProduct = JSON.stringify(this.cartProducts);
    this.getTotal();
  }
  deleteCurrentItem(proId) {
    console.log(proId);
    this.services.delItemFromCart(proId).subscribe((data: any) => {
      console.log(data);
    });
    this.getCartProduct();
    this.getTotal();
  }
  status: boolean = false;
  addToCart() {
    let products = this.cartProducts.map((item) => {
      return { productsId: item.item.id, quantity: item.quantity };
    });
    let model = {
      userId: 1,
      data: new Date(),
      products: products,
    };

    this.services.createNewCart(model).subscribe((data) => {});
    this.status = true;
  }
}
