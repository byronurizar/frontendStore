import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCartComponent } from './add-cart/add-cart.component';
import { FormsModule } from '@angular/forms';
import { CheckOutComponent } from './check-out/check-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { NgxPrintModule } from 'ngx-print';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { OrderByPipe } from '../../shared/service/e-commerce/order-by.pipe';

import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [ProductsComponent,OrderByPipe, ProductDetailComponent, AddCartComponent, CheckOutComponent, InvoiceComponent, QuickViewComponent, WishlistComponent,
    ProductListComponent,
    PaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    CarouselModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    Ng2SmartTableModule,
    GalleryModule.forRoot()
  ],
  providers: [NgbActiveModal, ProductsService ]
})
export class EcommerceModule { }
