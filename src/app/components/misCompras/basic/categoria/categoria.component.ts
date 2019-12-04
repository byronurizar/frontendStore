import { NgModule,Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { NgForm,FormGroup,Validators } from '@angular/forms';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  categoria: Categoria = {
    id: 1,
    descripcion: '',
    idEstado: 1
  }

  @ViewChild("regCategoriaForm",{static:false}) regCategoriaForm: NgForm;

  public validationForm: FormGroup;
  constructor(private servicio:CategoriaService) { }

  ngOnInit() {

  }
  registrarCategoria({ value, valid }: { value: Categoria, valid: boolean }) {
    

var info;
this.servicio.obtenerToken().subscribe(
  (data)=>{
   // console.log("Data",data);
  },
  (error)=>{
    console.log(error);
  }
)

    if (valid) {
      console.log("Data Válida",value);
      this.servicio.registrarCategoria(value).subscribe(
        (data)=>{
          console.log("Registro",data);
        },
        (error)=>{
          console.log(error);
        }
      );
    } else {
     // console.log("Data",value);
    }
  }
}
