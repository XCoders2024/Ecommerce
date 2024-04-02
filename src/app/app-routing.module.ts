import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AllCategoryComponent } from './category/components/all-category/all-category.component';
import { PaymentComponent } from './order/components/payment/payment.component';
import { UserLoginComponent } from './user/components/user-login/user-login.component';
import { UserRegisterComponent } from './user/components/user-register/user-register.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';
import { UserEditComponent } from './user/components/user-edit/user-edit.component';
import { UserLogoutComponent } from './user/components/user-logout/user-logout.component';
import { OrdersComponent } from './order/components/orders/orders.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'product', component: AllProductsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'redirect', redirectTo: 'product', pathMatch: 'full' },
  { path: 'Category', component: AllCategoryComponent },
  { path: '**', redirectTo: 'product', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'Register', component: UserRegisterComponent },
  { path: 'Profile', component: UserProfileComponent },
  { path: 'userEdit', component: UserEditComponent },
  { path: 'logout', component: UserLogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
