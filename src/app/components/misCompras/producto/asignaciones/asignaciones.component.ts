import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ToastrService } from 'ngx-toastr';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import { ElementoLista } from 'src/app/modelos/elementoLista.model';
declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsignacionesComponent implements OnInit {

  constructor(private conectorApi: ConectorApi, private toastrService: ToastrService) {
    this.listarColores();
    this.listarTallas();
    this.listarEtiquetas();
  }
  info: any[];
  public configuracion: Object;
  public configuracionTallas: Object;
  public configuracionEtiquetas: Object;
  colores: ElementoLista[] = [];
  coloresDesc: ElementoLista[] = [];
  coloresAsignados: any;
  tallas: ElementoLista[] = [];
  tallasDesc: ElementoLista[] = [];
  tallasAsignados: any;
  etiquetas: ElementoLista[] = [];
  etiquedasDesc: ElementoLista[] = [];
  etiquetasAsignadas: any;

  ngOnInit() {
    this.listarColoresAsignados();
    this.listarTallassAsignados();
    this.listarEtiquetasAsignados();
  }

  async listarColores() {
    try {
      this.conectorApi.Get('colores/listar').subscribe(
        async (data) => {
          let dat = data as ApiRest;
          await dat.data.forEach(item => {
            this.colores.push(new ElementoLista(item.id, item.descripcion))
            this.coloresDesc.push(new ElementoLista(item.descripcion, item.descripcion))

          });
          this.configuracion = {
            mode: 'inline', // inline|external|click-to-edit
            selectMode: 'single', // single|multi
            hideHeader: false,
            hideSubHeader: false,
            actions: {
              columnTitle: 'Acciones',
              add: true,
              edit: true,
              delete: false,
              custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
              position: 'left'
            },
            pager: {
              display: true,
              perPage: 10
            },
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
              idColor: {
                title: 'Color',
                filter: false,
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: this.coloresDesc
                  }
                },
                type: 'number',
              },
              idEstado: {
                title: 'Estado',
                filter: false,
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [
                      { value: 'Activo', title: 'Activo' },
                      { value: 'Inactivo', title: 'Inactivo' }
                    ]
                  }
                },
                type: 'number',
              },
            },
            noDataMessage: 'No existen registros',
          }
        },
        (dataError) => {
          this.toastrService.error(dataError.message, 'Alerta!');
        }
      )
    } catch (ex) {
      this.toastrService.error(ex, 'Alerta!');
    }
  }

  onAsignarColor(event): void {
    try {
      if (event.newData) {
        let itemColor = this.colores.find(item => item.title == event.newData["idColor"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: 1,
          idColor: itemColor.value,
          idEstado: 1
        });

        this.conectorApi.Post("productos/asigcolor/registro", jsonSolicitud).subscribe(
          (data) => {
            let apiResult = data as ApiRest;
            if (apiResult.codigo == 0) {
              this.toastrService.success(apiResult.respuesta, 'Información!');
              event.confirm.resolve(event.newData);
              this.listarColoresAsignados();
            } else {
              this.toastrService.success(apiResult.respuesta, 'Alerta!');
              event.confirm.reject();
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        )
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }

  onActualizarAsigColor(event): void {
    try {
      if (event.newData) {
        if (event.newData["idEstado"].trim().toUpperCase() == "INACTIVO") {
          event.newData["idEstado"] = 2;
        } else {
          event.newData["idEstado"] = 1;
        }
        let itemColor = this.colores.find(item => item.title == event.newData["idColor"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: 1,
          idColor: itemColor.value,
          idEstado: event.newData["idEstado"]
        });
        this.conectorApi.Patch("productos/asigcolor/actualizar/" + event.newData["id"], jsonSolicitud).subscribe(
          (data) => {
            let apiResult = data as ApiRest;
            if (apiResult.codigo == 0) {
              this.toastrService.success(apiResult.respuesta, 'Información!');
              event.confirm.resolve(event.newData);
              this.listarColoresAsignados();
            } else {
              this.toastrService.success(apiResult.respuesta, 'Alerta!');
              event.confirm.reject();
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        )
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }

  async listarColoresAsignados() {
    try {
      this.conectorApi.Get("productos/asigcolor/listar/1").subscribe(
        async (data) => {
          let apiResult = data as ApiRest;
          if (apiResult.codigo == 0) {
            this.coloresAsignados = await apiResult.data;
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


  async listarTallas() {
    try {
      this.conectorApi.Get('tallas/listar').subscribe(
        async (data) => {
          let dat = data as ApiRest;
          await dat.data.forEach(item => {
            this.tallas.push(new ElementoLista(item.id, item.descripcion))
            this.tallasDesc.push(new ElementoLista(item.descripcion, item.descripcion))

          });
          this.configuracionTallas = {
            mode: 'inline', // inline|external|click-to-edit
            selectMode: 'single', // single|multi
            hideHeader: false,
            hideSubHeader: false,
            actions: {
              columnTitle: 'Acciones',
              add: true,
              edit: true,
              delete: false,
              custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
              position: 'left'
            },
            pager: {
              display: true,
              perPage: 10
            },
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
              idTalla: {
                title: 'Talla',
                filter: false,
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: this.tallasDesc
                  }
                },
                type: 'number',
              },
              idEstado: {
                title: 'Estado',
                filter: false,
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [
                      { value: 'Activo', title: 'Activo' },
                      { value: 'Inactivo', title: 'Inactivo' }
                    ]
                  }
                },
                type: 'number',
              },
            },
            noDataMessage: 'No existen registros',
          }
        },
        (dataError) => {
          this.toastrService.error(dataError.message, 'Alerta!');
        }
      )
    } catch (ex) {
      this.toastrService.error(ex, 'Alerta!');
    }
  }

  onAsignarTalla(event): void {
    try {
      if (event.newData) {
        let itemTalla = this.tallas.find(item => item.title == event.newData["idTalla"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: 1,
          idTalla: itemTalla.value,
          idEstado: 1
        });

        this.conectorApi.Post("productos/asigtalla/registro", jsonSolicitud).subscribe(
          (data) => {
            let apiResult = data as ApiRest;
            if (apiResult.codigo == 0) {
              this.toastrService.success(apiResult.respuesta, 'Información!');
              event.confirm.resolve(event.newData);
              this.listarTallassAsignados();
            } else {
              this.toastrService.success(apiResult.respuesta, 'Alerta!');
              event.confirm.reject();
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        )
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }

  onActualizarAsigTalla(event): void {
    try {
      if (event.newData) {
        if (event.newData["idEstado"].trim().toUpperCase() == "INACTIVO") {
          event.newData["idEstado"] = 2;
        } else {
          event.newData["idEstado"] = 1;
        }
        let itemTalla = this.tallas.find(item => item.title == event.newData["idTalla"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: 1,
          idTalla: itemTalla.value,
          idEstado: event.newData["idEstado"]
        });
        this.conectorApi.Patch("productos/asigtalla/actualizar/" + event.newData["id"], jsonSolicitud).subscribe(
          (data) => {
            let apiResult = data as ApiRest;
            if (apiResult.codigo == 0) {
              this.toastrService.success(apiResult.respuesta, 'Información!');
              event.confirm.resolve(event.newData);
              this.listarTallassAsignados();
            } else {
              this.toastrService.success(apiResult.respuesta, 'Alerta!');
              event.confirm.reject();
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        )
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }

  async listarTallassAsignados() {
    try {
      this.conectorApi.Get("productos/asigtalla/listar/1").subscribe(
        async (data) => {
          let apiResult = data as ApiRest;
          if (apiResult.codigo == 0) {
            this.tallasAsignados = await apiResult.data;
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

  async listarEtiquetas() {
    try {
      this.conectorApi.Get('etiquetas/listar').subscribe(
        async (data) => {
          let dat = data as ApiRest;
          await dat.data.forEach(item => {
            this.etiquetas.push(new ElementoLista(item.id, item.descripcion))
            this.etiquedasDesc.push(new ElementoLista(item.descripcion, item.descripcion))

          });
          this.configuracionEtiquetas = {
            mode: 'inline', // inline|external|click-to-edit
            selectMode: 'single', // single|multi
            hideHeader: false,
            hideSubHeader: false,
            actions: {
              columnTitle: 'Acciones',
              add: true,
              edit: true,
              delete: false,
              custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
              position: 'left'
            },
            pager: {
              display: true,
              perPage: 10
            },
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
              idEtiqueta: {
                title: 'Etiqueta',
                filter: false,
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: this.etiquedasDesc
                  }
                },
                type: 'number',
              },
              idEstado: {
                title: 'Estado',
                filter: false,
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [
                      { value: 'Activo', title: 'Activo' },
                      { value: 'Inactivo', title: 'Inactivo' }
                    ]
                  }
                },
                type: 'number',
              },
            },
            noDataMessage: 'No existen registros',
          }
        },
        (dataError) => {
          this.toastrService.error(dataError.message, 'Alerta!');
        }
      )
    } catch (ex) {
      this.toastrService.error(ex.message, 'Alerta!');
    }
  }
  async listarEtiquetasAsignados() {
    try {
      this.conectorApi.Get("etiquetasproducto/listar/producto/1").subscribe(
        async (data) => {
          let apiResult = data as ApiRest;
          if (apiResult.codigo == 0) {
            this.etiquetasAsignadas = await apiResult.data;
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

  onAsignarEtiqueta(event): void {
    try {
      if (event.newData) {
        let itemEtiqueta = this.etiquetas.find(item => item.title == event.newData["idEtiqueta"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: 1,
          idEtiqueta: itemEtiqueta.value,
          idEstado: 1
        });

        this.conectorApi.Post("etiquetasproducto/registro", jsonSolicitud).subscribe(
          (data) => {
            let apiResult = data as ApiRest;
            if (apiResult.codigo == 0) {
              this.toastrService.success(apiResult.respuesta, 'Información!');
              event.confirm.resolve(event.newData);
              this.listarEtiquetasAsignados();
            } else {
              this.toastrService.success(apiResult.respuesta, 'Alerta!');
              event.confirm.reject();
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        )
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }

  onActualizarAsigEtiqueta(event): void {
    try {
      if (event.newData) {
        if (event.newData["idEstado"].trim().toUpperCase() == "INACTIVO") {
          event.newData["idEstado"] = 2;
        } else {
          event.newData["idEstado"] = 1;
        }
        let itemEtiqueta = this.etiquetas.find(item => item.title == event.newData["idEtiqueta"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: 1,
          idEtiqueta: itemEtiqueta.value,
          idEstado: event.newData["idEstado"]
        });
        this.conectorApi.Patch("etiquetasproducto/actualizar/" + event.newData["id"], jsonSolicitud).subscribe(
          (data) => {
            let apiResult = data as ApiRest;
            if (apiResult.codigo == 0) {
              this.toastrService.success(apiResult.respuesta, 'Información!');
              event.confirm.resolve(event.newData);
              this.listarEtiquetasAsignados();
            } else {
              this.toastrService.success(apiResult.respuesta, 'Alerta!');
              event.confirm.reject();
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        )
      }
    } catch (error) {
      this.toastrService.error(error.message, 'Alerta!');
    }
  }


}

