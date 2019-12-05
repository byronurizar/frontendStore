import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import { Categoria } from 'src/app/modelos/categoria.model';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ToastrService } from 'ngx-toastr';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-gs-categoria',
  templateUrl: './gs-categoria.component.html',
  styleUrls: ['./gs-categoria.component.scss']
})
export class GsCategoriaComponent implements OnInit {
  
  constructor(private conectorApi: ConectorApi,private toastrService: ToastrService) { }
  info: any[];

  ngOnInit() {
    this.cargarInformacion();
  }

  settings = {
    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true
    },
    delete: {
      confirmDelete: true
    },
    columns: {
      descripcion: {
        title: 'Descripción'
      },
      idEstado: {
        title: 'Estado',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              { value: 1, title: 'Activo' },
              { value: 2, title: 'Inactivo' }
            ]
          }
        },
        type: 'number',
      }
    }
  };

  cargarInformacion() {
    this.conectorApi.Get('categorias/listar').subscribe(
      (data) => {
        let dat = data as ApiRest;
        this.info = dat.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onRegistrar(event): void {
    try{
    if (event.newData) {
      if (event.newData["descripcion"].length > 5) {
        this.conectorApi.Post('categorias/registro', event.newData).subscribe(
          (data) => {
            let apiResult=data as ApiRest;
            if(apiResult.codigo==0){
              this.toastrService.success(apiResult.respuesta, 'Información!');
              this.cargarInformacion();
            }else{
              this.toastrService.success(apiResult.respuesta, 'Alerta!');
            }
          },
          (dataError) => {
            let apiResult=dataError.error as ApiRest;
            this.toastrService.error(apiResult.respuesta, 'Alerta!');
          }
        );
      } else {
        console.log("Alertar ");
      }
    } else {
      console.log("No existe informacion");
    }
    console.log("Registrar Nueva Cátegoria", event.newData);
  }catch(error) {
    this.toastrService.error(error, 'Alerta!');
  }
  }


  onActualizar(event): void {
    console.log("Actualizar Cátegoria",event);
    if (event.newData) {
      if (event.newData["descripcion"].length > 5) {
        this.conectorApi.Patch(`categorias/actualizar/${event.data["id"]}`, event.newData).subscribe(
          (data) => {
            console.log("Registro", data);
            this.cargarInformacion();
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("Alertar ");
      }
    } else {
      console.log("No existe informacion");
    }
  }

  onElimnar(event): void {
    console.log("Eliminar categorias");
  }

}
