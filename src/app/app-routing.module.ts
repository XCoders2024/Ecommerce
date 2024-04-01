import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AllCategoryComponent } from './category/components/all-category/all-category.component';
import { PaymentComponent } from './order/components/payment/payment.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'product', component: AllProductsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: PaymentComponent },
  { path: 'redirect', redirectTo: 'product', pathMatch: 'full' },
  { path: 'Category', component: AllCategoryComponent },
  { path: '**', redirectTo: 'product', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
