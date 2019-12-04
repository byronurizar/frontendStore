import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from "../../../shared/model/e-commerce/cart.model";
import { CartService } from "../../../shared/service/e-commerce/cart.service";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
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
