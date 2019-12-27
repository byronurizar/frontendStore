import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/model/e-commerce/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentDetail } from 'src/app/shared/model/e-commerce/content';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import { Producto } from 'src/app/modelos/producto.model';
import { Carrito } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
  public imagenesProducto: any[] = [];
  public producto: any = {};
  public tallasDisponibles: any;
  public coloresDisponibles: any;
  public dataProducto: any = {};
  tallaSeleccionada = 0;
  colorSeleccionado = 0;
  public productosRelacionados: Producto[] = [];
  public detailCnt = [];
  public slidesPerPage = 4;
  public syncedSecondary = true;
  public allContent = [];
  public contents = [];
  public active: boolean = false;
  public type: string = "Febric"
  public nav: any;

  sliderOption = {
    rtl: true,
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200
  }

  sliderNavOptions = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  }

  constructor(private conectorApi: ConectorApi, private router: Router, private route: ActivatedRoute, private toastrService: ToastrService, config: NgbRatingConfig, public productService: ProductsService, private cartService: Carrito) {
    this.allContent = ContentDetail.ContentDetails;


    //for rating 
    this.allContent.filter(opt => {
      if (this.type == opt.type) {
        this.contents.push(opt);
      }
    });

    config.max = 5;
    config.readonly = false;

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.infoProducto(id);
      this.listarProductosCruzados();
    });
  }
  ngOnInit() {
    console.log("Detalle de producto");

  }


  infoProducto(idProducto) {
    try {
      if (idProducto) {
        this.conectorApi.Get(`productos/comercio/infoproducto/${idProducto}`).subscribe(
          (data) => {
            let dat = data as ApiRest;
            if (dat.codigo == 0) {
              this.dataProducto = dat.data;
              this.producto = this.dataProducto[0];
              console.log("Producto", this.producto);
              this.listarImagenes(idProducto);
            } else {
              this.toastrService.error(dat.error, 'Alerta!');
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        );
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }

  listarImagenes(idProducto) {
    try {
      if (idProducto) {
        this.conectorApi.Get(`productos/imagenes/listar/${idProducto}`).subscribe(
          (data) => {
            let dat = data as ApiRest;
            if (dat.codigo == 0) {
              this.imagenesProducto = dat.data;
              this.listarTallasDisponibles(idProducto);
            } else {
              this.toastrService.error(dat.error, 'Alerta!');
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        );
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }
  async listarTallasDisponibles(idProducto) {
    try {
      this.conectorApi.Get(`productos/asigtalla/listar/${idProducto}`).subscribe(
        async (data) => {
          let apiResult = data as ApiRest;
          if (apiResult.codigo == 0) {
            this.tallasDisponibles = await apiResult.data;
            this.listarColoresDisponibles(idProducto);
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
            this.coloresDisponibles = await apiResult.data;
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

  async listarProductosCruzados() {
    this.conectorApi.Get("productos/comercio/listar").subscribe(
      async (data) => {
        let dat = data as ApiRest;
        if(dat.codigo==0){
          this.productosRelacionados =await dat.data;
          console.log("Productos",this.productosRelacionados);
        }
        
      },
      (dataError) => {
        console.log("Data Error", dataError);
      }
    )
  }

  getOption(type) {
    this.contents = [];
    return this.allContent.filter(data => {
      if (type == data.type) {
        this.active = true;
        return this.contents.push(data)
      } else {
        return false
      }
    })
  }

  public buyNow(producto:any, cantidad: number = 1) {
    if (cantidad > 0){
      this.cartService.agregarProducto(producto, cantidad,this.colorSeleccionado,this.tallaSeleccionada);      
      this.router.navigate(['/ecommerce/check-out']);
    }
  }

  public addToCart(producto:any, cantidad: number = 1) {
    if (cantidad == 0){
      return false;
    } else{
      this.cartService.agregarProducto(producto, cantidad,this.colorSeleccionado,this.tallaSeleccionada);
    }
    
  }



}
