import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImagenesComponent implements OnInit {
  @Input() resultadoInput:number;
  constructor(private conectorApi: ConectorApi, private toastrService: ToastrService) { }

  ngOnInit() {
    console.log("Codigo en imagenes",this.resultadoInput);
  }
  files: File[] = [];

  onFilesAdded(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onFilesRejected(event) {
    console.log(event);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  registrarImagenes() {
    try {
      this.files.forEach(archivo => {
        const formData = new FormData();
        formData.append('imagen', archivo, archivo.name);
        formData.append('idProducto', '1');
        formData.append('esImagenPrincipal', '1');
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
      });
    } catch (exce) {
      this.toastrService.error(exce.error, 'Alerta!');
    }
  }
}
