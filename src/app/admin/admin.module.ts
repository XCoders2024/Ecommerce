import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products/products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [OrdersComponent,ProductsComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
