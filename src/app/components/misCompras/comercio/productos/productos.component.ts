import { Component, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/shared/model/e-commerce/product.model';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WishListService } from 'src/app/shared/service/e-commerce/wish-list.service';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { Producto } from 'src/app/modelos/producto.model';
import { ApiRest } from 'src/app/modelos/apiResponse.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Output() productDetail: any;

  @Output() productoDetalleVistaRapida: any;
  public productos: Producto[] = [];




  constructor(private conectorApi: ConectorApi, private toastr: ToastrService, private route: ActivatedRoute, private cartService: CartService, private modalService: NgbModal, private wishService: WishListService) { }

  async listarProductos() {
    this.conectorApi.Get("productos/comercio/listar").subscribe(
      async (data) => {
        let dat = data as ApiRest;
        if (dat.codigo == 0) {
          this.productos = await dat.data;
          console.log("Productos", this.productos);
        }

      },
      (dataError) => {
        console.log("Data Error", dataError);
      }
    )
  }
  ngOnInit() {
    this.listarProductos();
  }
  abrirDetalle(content, id: number) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.productoDetalleVistaRapida = this.productos.find(item => item.id == id);
  }

  showAdd() {
    this.toastr.success('User Added !');
  }

  // add to cart service
  public addToCart(product: Products, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  //add to wish list service
  public addToWishlist(product: Products, quantity: number = 1) {
    this.wishService.addToWishList(product, quantity);
    this.showAdd();
  }

}
