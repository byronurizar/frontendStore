import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/shared/model/e-commerce/cart.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { Carrito } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  public cartItems: Observable<any[]> = of([]);
  public selectCartItems: any[] = [];

  constructor(private route: ActivatedRoute, private cartService: Carrito) {
  }

  remove(item) {
    console.log("Data item",item);
    this.cartService.eliminarItem(item);
  }

  
  public getTotal():Observable<number> {
    return this.cartService.getCantidadTotal();
  }

  public disminuir(item: any, cantidad: number = -1) {
    this.cartService.actualizarCantidad(item, cantidad)

  }

  public incrementar(item: any, cantidad: number = +1) {
    this.cartService.actualizarCantidad(item, cantidad)
  }

  ngOnInit() {
    this.cartItems = this.cartService.getTodos();
    this.cartItems.subscribe(selectCartItems => this.selectCartItems = selectCartItems)
  }

}
