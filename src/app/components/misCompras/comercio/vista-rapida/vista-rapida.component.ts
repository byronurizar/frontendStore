import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbRatingConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { Products } from 'src/app/shared/model/e-commerce/product.model';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/shared/model/e-commerce/cart.model';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ToastrService } from 'ngx-toastr';
import { ApiRest } from 'src/app/modelos/apiResponse.model';

@Component({
  selector: 'app-vista-rapida',
  templateUrl: './vista-rapida.component.html',
  styleUrls: ['./vista-rapida.component.scss']
})
export class VistaRapidaComponent implements OnInit {

  @Input() productoDetalleVistaRapida: any;
  public cantidad: number = 1;
  tallasDisponibles:any;
  idTalla:number;
  @Input() productDetail: any;



  public cartItems: Observable<CartItem[]> = of([]);
  public selectCartItems: CartItem[] = [];

  public product: Products = {};
  public detailCnt = [];
  public slidesPerPage = 4;
  public products: Products[];

  public incrementar() {
      this.cantidad += 1;
  }

  public disminuir() {
    if (this.cantidad > 1) {
      this.cantidad -= 1;
    }
  }

  public tallaSelecionada(id){
    this.idTalla=id;
  }

  constructor(private router: Router,private conectorApi: ConectorApi,private toastrService: ToastrService, private route: ActivatedRoute, config: NgbRatingConfig, public productService: ProductsService, private cartService: CartService, private ngb: NgbModal) {
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
    this.litarTallasDisponibles();
  }
  async litarTallasDisponibles() {
    try {
      this.conectorApi.Get(`productos/asigtalla/listar/${this.productoDetalleVistaRapida.id}`).subscribe(
        async (data) => {
          let apiResult = data as ApiRest;
          if (apiResult.codigo == 0) {
            this.tallasDisponibles=await apiResult.data;
          } else {
            this.toastrService.success(apiResult.respuesta, 'Alerta!');
          }
        },
        (dataError) => {
          this.toastrService.error(dataError.message, 'Alerta!');
        }
      )

    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }

}
