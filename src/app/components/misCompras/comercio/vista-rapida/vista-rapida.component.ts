import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbRatingConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { Products } from 'src/app/shared/model/e-commerce/product.model';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/shared/model/e-commerce/cart.model';

@Component({
  selector: 'app-vista-rapida',
  templateUrl: './vista-rapida.component.html',
  styleUrls: ['./vista-rapida.component.scss']
})
export class VistaRapidaComponent implements OnInit {

  @Input() productDetail: any;

  public cartItems: Observable<CartItem[]> = of([]);
  public selectCartItems: CartItem[] = [];
  public counter: number = 1;
  public product: Products = {};
  public detailCnt = [];
  public slidesPerPage = 4;
  public products: Products[];

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  constructor(private router: Router, private route: ActivatedRoute, config: NgbRatingConfig, public productService: ProductsService, private cartService: CartService, private ngb: NgbModal) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngb.dismissAll();
      }
    });

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    });

  }

  public addToCart(product: Products, quantity) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, parseInt(quantity));
  }

  public buyNow(product: Products, quantity) {
    if (quantity > 0)
      this.cartService.addToCart(product, parseInt(quantity));
    this.router.navigate(['/ecommerce/check-out']);
  }

  ngOnInit() {
    this.cartItems = this.cartService.getAll();
    this.cartItems.subscribe(selectCartItems => this.selectCartItems = selectCartItems)
  }

}
