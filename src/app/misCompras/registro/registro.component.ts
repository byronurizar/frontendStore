import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/modelos/persona.model';
import { ElementoLista } from 'src/app/modelos/elementoLista.model';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { ToastrService } from 'ngx-toastr';
import { ApiRest } from 'src/app/modelos/apiResponse.model';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

declare var require
const Swal = require('sweetalert2')
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  personas: Persona[];
  departamentos: ElementoLista[] = [];
  municipios: ElementoLista[] = [];
  itemPersona: Persona = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    genero: 0,
    municipio: 0,
    email: '',
    contrasenia: ''

  }

  model: NgbDateStruct;
  date: {year: number, month: number};


  @ViewChild("nuevoUsuario", { static: false }) nuevoUsuario: NgForm;
  public emailForm: FormGroup;
  public form: any;
  constructor(private conectorApi: ConectorApi, private toastrService: ToastrService,private calendar: NgbCalendar) {
    this.listarDepartamentos();
  }
  
  selectToday() {
    this.model = this.calendar.getToday();
  }

  async listarDepartamentos() {
    try {
      this.departamentos.push(new ElementoLista('0', 'Seleccione'))
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

  ngOnInit() {
  }

  registrar({ value, valid }: { value: Persona, valid: boolean }) {
    console.log("Data formulario", value);
    if (!valid) {
      return;
    }
  }
}
