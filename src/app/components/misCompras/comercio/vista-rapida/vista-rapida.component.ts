import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbRatingConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { Products } from 'src/app/shared/model/e-commerce/product.model';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ToastrService } from 'ngx-toastr';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import { Carrito } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-vista-rapida',
  templateUrl: './vista-rapida.component.html',
  styleUrls: ['./vista-rapida.component.scss']
})
export class VistaRapidaComponent implements OnInit {

  @Input() productoDetalleVistaRapida: any;
  public cantidad: number = 1;
  tallasDisponibles:any;
  coloresDisponibles:any;
  tallaSeleccionada=0;
colorSeleccionado=0;
  idTalla:number;

  public detailCnt = [];
  public slidesPerPage = 4;

  public incrementar() {
      this.cantidad += 1;
  }

  public disminuir() {
    if (this.cantidad > 1) {
      this.cantidad -= 1;
    }
  }

  constructor(private router: Router,private conectorApi: ConectorApi,private toastrService: ToastrService, private route: ActivatedRoute, config: NgbRatingConfig, public productService: ProductsService, private cartService: Carrito, private ngb: NgbModal) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngb.dismissAll();
      }
    });

  }

  public addToCart(product: Products, quantity) {
    if (quantity == 0) return false;
    // this.cartService.addToCart(product, parseInt(quantity));
  }

  public agregarProducto(producto:any,cantidad:number){
    if(cantidad==0){
      return false;
    }else{
      console.log("Cantidad Vista rapida",cantidad);
      this.cartService.agregarProducto(producto,cantidad,this.colorSeleccionado,this.tallaSeleccionada);
    }
  }

  public buyNow(product: Products, quantity) {
    if (quantity > 0)
      //this.cartService.addToCart(product, parseInt(quantity));
    this.router.navigate(['/ecommerce/check-out']);
  }


  ngOnInit() {
    this.litarTallasDisponibles();
  }
  async litarTallasDisponibles() {
    try {
      this.conectorApi.Get(`productos/asigtalla/listar/${this.productoDetalleVistaRapida.id}`).subscribe(
        async (data) => {
          let apiResult = data as ApiRest;
          if (apiResult.codigo == 0) {
            this.tallasDisponibles=await apiResult.data;
            this.listarColoresDisponibles(this.productoDetalleVistaRapida.id);
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
  async listarColoresDisponibles(idProducto) {
    try {
      this.conectorApi.Get(`productos/asigcolor/listar/${idProducto}`).subscribe(
        async (data) => {
          let apiResult = data as ApiRest;
          if (apiResult.codigo == 0) {
            this.coloresDisponibles=await apiResult.data;
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
