import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/shared/model/e-commerce/cart.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  public cartItems: Observable<CartItem[]> = of([]);
  public selectCartItems: CartItem[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService) {
  }

  remove(item) {
    this.cartService.removeCartItem(item);
  }


  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity)

  }

  public increment(product: any, quantity: number = +1) {
    this.cartService.updateCartQuantity(product, quantity)
  }

  ngOnInit() {
    this.cartItems = this.cartService.getAll();
    this.cartItems.subscribe(selectCartItems => this.selectCartItems = selectCartItems)
  }

}
