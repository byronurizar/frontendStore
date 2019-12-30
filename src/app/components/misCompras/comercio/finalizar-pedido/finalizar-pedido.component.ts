import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/shared/model/e-commerce/cart.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { InvoiceService } from 'src/app/shared/service/e-commerce/invoice.service';
import { ElementoLista } from 'src/app/modelos/elementoLista.model';
import { ToastrService } from 'ngx-toastr';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import { Carrito } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.scss']
})
export class FinalizarPedidoComponent implements OnInit {
  tipoPagoSeleccionado=0;
  nuevoTipoPago=0;
  departamentos: ElementoLista[] = [];
  municipios: ElementoLista[] = [];
  tiposPago:any[]=[];
  detallePedido:any[]=[];
  public cartItems: Observable<any[]> = of([]);
  public checkOutItems: any;
  public checkoutForm: FormGroup;
  public amount: number;
  public submitted = false;
  public userInfo: string;
  constructor(private fb: FormBuilder,private conectorApi: ConectorApi, private toastrService: ToastrService,private carrito:Carrito, public productService: ProductsService, private cartService: CartService, private invoiceService: InvoiceService) {
    this.createForm();
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      apellidos: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      telefonos: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.minLength(20)]],
      puntoReferencia: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  public cambiarTipoPago(idtipo){
    this.nuevoTipoPago=idtipo;
  }
  
  onSubmit() {
    let dataPedido;
    this.submitted = true;
    // if (this.checkoutForm.invalid) {
    //   return;
    // }
    this.userInfo = this.checkoutForm.value;
    console.log("Info formulario",this.userInfo);
    this.checkOutItems.forEach(item=>{
     let itemPedido={
        id:item.producto.id,
        idTalla:item.talla.idTalla,
        idColor:item.color.idColor,
        cantidad:item.cantidad
      }
      this.detallePedido.push(itemPedido);
    })

let json={
  data:this.userInfo,
  detallePedido:this.detallePedido,
  idTipoPago:this.tipoPagoSeleccionado
}

console.log("Data pedido",json);
    this.conectorApi.Post("pedido/recibe/registro", json).subscribe(
      (data)=>{
        console.log("Data Registro",data);
      },
      (dataErrror)=>{
        console.log("Data Registro Error",dataErrror);
      }
    )
  }
  public getTotal(): Observable<number> {
    return this.carrito.getCantidadTotal();
  }
  ngOnInit() {
    this.cartItems = this.carrito.getTodos();
    this.cartItems.subscribe(products => this.checkOutItems = products);
    this.carrito.getCantidadTotal().subscribe(amount => this.amount = amount);
    this.listarDepartamentos();
    this.listarTipoPago();
  }
  async listarDepartamentos() {
    try {
      this.departamentos.push(new ElementoLista('', 'Seleccione un departamento'))
      this.conectorApi.Get('departamentos/listar').subscribe(
        async (data) => {
          let dat = data as ApiRest;
          console.log("Todos los departamentos", dat.data);
          await dat.data.forEach(departamento => {
            this.departamentos.push(new ElementoLista(departamento.id, departamento.descripcion))
          });
        },
        (dataError) => {
          this.toastrService.error(dataError.error, 'Alerta!');
        }
      )
    } catch (ex) {
      this.toastrService.error(ex, 'Alerta!');
    }
  }
  
  async listarMunicipios(event) {
    try {
      this.municipios = [];
      let idDepto = event.target.value;
      if (idDepto > 0) {
        this.municipios.push(new ElementoLista('', 'Seleccione un municipio'))
        this.conectorApi.Get('municipios/listar/departamento/' + idDepto).subscribe(
          async (data) => {
            let dat = data as ApiRest;
            console.log("Todos los municipios", dat.data);
            await dat.data.forEach(muni => {
              this.municipios.push(new ElementoLista(muni.id, muni.descripcion))
            });
          },
          (dataError) => {
            this.toastrService.error(dataError.error, 'Alerta!');
          }
        )
      }
    } catch (ex) {
      this.toastrService.error(ex, 'Alerta!');
    }

  }
  async listarTipoPago() {
    try {
      this.conectorApi.Get('tipopago/listar').subscribe(
        (data) => {
          let dat = data as ApiRest;
          if(dat.codigo==0){
            this.tiposPago=dat.data;
          }
        },
        (dataError) => {
          this.toastrService.error(dataError.error, 'Alerta!');
        }
      )
    } catch (ex) {
      this.toastrService.error(ex, 'Alerta!');
    }

  }



}
