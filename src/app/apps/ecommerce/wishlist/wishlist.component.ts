import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { ActivatedRoute } from '@angular/router';
import { WishListService } from '../../../shared/service/e-commerce/wish-list.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = of([]);
  public selectCartItems: CartItem[] = [];

  constructor(private route: ActivatedRoute, private wishService: WishListService) {
  }

  remove(item) {
    this.wishService.removeWishItem(item);
  }

  ngOnInit() {
    this.cartItems = this.wishService.getAll();
    this.cartItems.subscribe(selectCartItems => this.selectCartItems = selectCartItems)
  }
}