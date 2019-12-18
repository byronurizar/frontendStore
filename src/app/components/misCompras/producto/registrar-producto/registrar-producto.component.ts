import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ElementoLista } from 'src/app/modelos/elementoLista.model';
import { ToastrService } from 'ngx-toastr';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import { MovingDirection } from 'angular-archwizard';
declare var require
const Swal = require('sweetalert2')
@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrarProductoComponent implements OnInit {
  public title: string = "registration page"
  public validationForm: FormGroup;
  proveedores: ElementoLista[] = [];
  catalogos: ElementoLista[] = [];
  categorias: ElementoLista[] = [];
  ingresos = 0;
  public canExitStep1: (MovingDirection) => boolean;
  constructor(private fb: FormBuilder, private conectorApi: ConectorApi, private toastrService: ToastrService) {

  }

  ngOnInit() {

    // this.canExitStep1 = (direction) => {
    //   switch (direction) {
    //     case MovingDirection.Forwards:
    //       return true;
    //     case MovingDirection.Backwards:
    //       return false;
    //     case MovingDirection.Stay:
    //       return true;
    //   }
    // };

    this.ingresos += 1;
    this.listarProveedores();
    this.listarCategorias();
    this.validationForm = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      descripcionCorta: [''],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required],
      idCatalogo: ['', Validators.required],
      nopagina: ['', Validators.required],
      idCategoria: ['', Validators.required]
    })
  }

  listarProveedores(): void {
    try {
      this.conectorApi.Get('proveedores/listar').subscribe(
        (data) => {
          let dat = data as ApiRest;
          dat.data.forEach(item => {
            this.proveedores.push(new ElementoLista(item.id, item.nombre))
          });
        },
        (dataError) => {
          let dat = dataError as ApiRest;
          this.toastrService.error(dat.error, 'Alerta!');
        }
      );
    } catch (exce) {
      this.toastrService.error(exce.error, 'Alerta!');
    }
  }
  async listarCatalogos(event) {
    try {
      this.catalogos = [];
      let idProveedor = event.target.value;
      this.conectorApi.Get('catalogos/listar/' + idProveedor).subscribe(
        async (data) => {
          let dat = data as ApiRest;
          await dat.data.forEach(item => {
            this.catalogos.push(new ElementoLista(item.id, item.descripcion))
          });
        },
        (dataError) => {
          let dat = dataError as ApiRest;
          this.toastrService.error(dat.error, 'Alerta!');
        }
      );
    } catch (exce) {
      this.toastrService.error(exce, 'Alerta!');
    }
  }
  async listarCategorias() {
    try {
      this.conectorApi.Get('categorias/listar').subscribe(
        async (data) => {
          let dat = data as ApiRest;
          await dat.data.forEach(item => {
            this.categorias.push(new ElementoLista(item.id, item.descripcion))
          });
        },
        (dataError) => {
          let dat = dataError as ApiRest;
          this.toastrService.error(dat.error, 'Alerta!');
        }
      );
    } catch (exce) {
      this.toastrService.error(exce, 'Alerta!');
    }
  }

  async registrarProducto(form: any) {
    if (!form.valid) {
      return false;
    }

    // try {
    //   this.conectorApi.Post("productos/registro", form.value).subscribe(
    //     (data) => {
    //       let info = data as ApiRest;
    //       if (info.codigo == 0) {
    //         this.toastrService.success(info.respuesta, 'Información!');
    //       } else {
    //         this.toastrService.error(info.error, 'Alerta!');
    //       }
    //     }, (dataError) => {
    //       let dat = dataError as ApiRest;
    //       this.toastrService.error(dat.error, 'Alerta!');
    //     }
    //   );
    // } catch (ex) {
    //   this.toastrService.error(ex.error, 'Alerta!');
    // }
    
  }

}
