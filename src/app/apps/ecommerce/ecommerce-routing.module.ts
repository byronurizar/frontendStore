import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductListComponent } from './product-list/product-list.component';
import {PaymentDetailsComponent } from './payment-details/payment-details.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'full'
      },
      {
        path: "product-details/:id",
        component: ProductDetailComponent
      },
      {
        path: "wishlist",
        component: WishlistComponent,
      },
      {
        path: "add-cart",
        component: AddCartComponent
      },
      {
        path: "check-out",
        component: CheckOutComponent
      },
      {
        path: 'product/list',
        component: ProductListComponent,
      },
      {
        path: 'payment/detail',
        component: PaymentDetailsComponent,
      },
      {
        path: "invoice",
        component: InvoiceComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule {

}