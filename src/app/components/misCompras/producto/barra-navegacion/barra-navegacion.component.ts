import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ElementoLista } from 'src/app/modelos/elementoLista.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ToastrService } from 'ngx-toastr';
import { ApiRest } from 'src/app/modelos/apiResponse.model';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarraNavegacionComponent implements OnInit {
  /*Sección de registro de producto*/
  public validationForm: FormGroup;
  proveedores: ElementoLista[] = [];
  catalogos: ElementoLista[] = [];
  categorias: ElementoLista[] = [];
  idProducto = "0";

  conImagenes = false;

  resultadoPadre: number;
  constructor(private fb: FormBuilder, private conectorApi: ConectorApi, private toastrService: ToastrService) {

    this.promListarColores.then((data1) => {
      this.promListarTallas.then((data2) => {
        this.promListarEtiquetas.then((data3) => {
        }).catch((error1) => {
          this.toastrService.error(error1.message, 'Alerta!');
        });
      }).catch((error2) => {
        this.toastrService.error(error2.message, 'Alerta!');
      });

    }).catch((error3) => {
      this.toastrService.error(error3.message, 'Alerta!');
    });
  }

  ngOnInit() {

    this.promProveedores.then((data1) => {
      this.promCategorias.then((data2) => {

      }).catch((error2) => {
        this.toastrService.error(error2.message, 'Alerta!');
      });
    }).catch((error1) => {
      this.toastrService.error(error1.message, 'Alerta!');
    });

    this.validationForm = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      descripcionCorta: ['',[]],
      precio: ['', Validators.required],
      oferta: ['', Validators.required],
      proveedor: ['', Validators.required],
      idCatalogo: ['', Validators.required],
      nopagina: ['', Validators.required],
      idCategoria: ['', Validators.required]
    })
  }
  //Registrar producto
  promProveedores = new Promise((resolver, reject) => {
    try {
      this.conectorApi.Get('proveedores/listar').subscribe(
        async (data) => {
          let dat = data as ApiRest;
          await dat.data.forEach(item => {
            this.proveedores.push(new ElementoLista(item.id, item.nombre))
          });
          resolver(true);
        },
        (dataError) => {
          reject(dataError);
        }
      );
    } catch (exce) {
      reject(exce);
    }
  });

  promCategorias = new Promise((resolver, reject) => {
    try {
      this.conectorApi.Get('categorias/listar').subscribe(
        async (data) => {
          let dat = data as ApiRest;
          dat.data.forEach(item => {
            this.categorias.push(new ElementoLista(item.id, item.descripcion))
          });
          resolver(true);
        },
        (dataError) => {
          reject(dataError);
        }
      );
    } catch (exce) {
      reject(exce);
    }
  });

  async listarCatalogos(event) {
    try {
      this.catalogos = [];
      let idProveedor =event;
      if(idProveedor){
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
      }
    } catch (exce) {
      this.toastrService.error(exce, 'Alerta!');
    }
  }


  async registrarProducto(form: any) {
    if (!form.valid) {
      return false;
    }

    try {
      this.conectorApi.Post("productos/registro", form.value).subscribe(
        (data) => {
          let info = data as ApiRest;
          if (info.codigo == 0) {
            this.toastrService.success(info.respuesta, 'Información!');
            this.idProducto = info.data.id;
          } else {
            this.toastrService.error(info.error, 'Alerta!');
          }
        }, (dataError) => {
          this.toastrService.error(dataError.message, 'Alerta!');
        }
      );
    } catch (ex) {
      this.toastrService.error(ex.error, 'Alerta!');
    }

  }


  //Imagenes
  files: File[] = [];
  registrarImagenes() {
    try {
      let contador = 0;
      this.files.forEach(archivo => {
        const formData = new FormData();
        formData.append('imagen', archivo, archivo.name);
        formData.append('idProducto', this.idProducto);
        if (contador == 0) {
          formData.append('esImagenPrincipal', '1');
        } else {
          formData.append('esImagenPrincipal', '0');
        }

        formData.append('idEstado', '1');
        console.log("from data", formData);
        this.conectorApi.PostImagenes("productos/imagenes/registro", formData).subscribe(
          (data) => {
            let info = data as ApiRest;
            if (info.codigo == 0) {
              this.toastrService.success(info.respuesta, 'Información!');
            } else {
              this.toastrService.error(info.error, 'Alerta!');
            }
          },
          (dataError) => {
            this.toastrService.error(dataError.message, 'Alerta!');
          }
        )

        contador++;
      });
    } catch (exce) {
      this.toastrService.error(exce.error, 'Alerta!');
    }
  }

  onFilesAdded(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.conImagenes = true;
  }

  onFilesRejected(event) {
    console.log(event);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    if (this.files.length == 0) {
      this.conImagenes = false;
    }
  }


  //Asignaciones
  promListarColores = new Promise((resolver, reject) => {
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
          resolver(true);
        },
        (dataError) => {
          reject(dataError);
        }
      )
    } catch (ex) {
      reject(ex);
    }
  });

  promListarTallas = new Promise((resolver, reject) => {
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
          resolver(true);
        },
        (dataError) => {
          reject(dataError);
        }
      )
    } catch (ex) {
      reject(ex);
    }
  });


  promListarEtiquetas = new Promise((resolver, reject) => {
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
          resolver(true);
        },
        (dataError) => {
          reject(dataError);
        }
      )
    } catch (ex) {
      reject(ex);
    }
  });


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

  onAsignarColor(event): void {
    try {
      if (event.newData) {
        let itemColor = this.colores.find(item => item.title == event.newData["idColor"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: this.idProducto,
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
          idProducto: this.idProducto,
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
      this.conectorApi.Get(`productos/asigcolor/listar/${this.idProducto}`).subscribe(
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


  onAsignarTalla(event): void {
    try {
      if (event.newData) {
        let itemTalla = this.tallas.find(item => item.title == event.newData["idTalla"]);

        let jsonSolicitud = JSON.stringify({
          idProducto: this.idProducto,
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
          idProducto: this.idProducto,
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
      this.conectorApi.Get(`productos/asigtalla/listar/${this.idProducto}`).subscribe(
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

  async listarEtiquetasAsignados() {
    try {
      this.conectorApi.Get(`etiquetasproducto/listar/producto/${this.idProducto}`).subscribe(
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
          idProducto: this.idProducto,
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
          idProducto: this.idProducto,
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

  finalizar() {
    this.validationForm.reset();
    this.files = [];
    this.coloresAsignados = [];
    this.tallasAsignados = [];
    this.etiquetasAsignadas = [];
    let json = JSON.stringify({ idEstado: 1 })
    this.conectorApi.Patch(`productos/actualizar/${this.idProducto}`, json).subscribe(
      (data) => {
        let apiResult = data as ApiRest;
        if (apiResult.codigo == 0) {
          this.toastrService.success(apiResult.respuesta, 'Información!');
        } else {
          this.toastrService.error(apiResult.error, 'Alerta!');
        }
      },
      (dataError) => {
        this.toastrService.success(dataError.error.error, 'Alerta!');
      }
    )
  }
}
