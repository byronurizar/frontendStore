import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ProductoComponent } from './producto.component';


@NgModule({
  declarations: [BarraNavegacionComponent, RegistrarProductoComponent,ProductoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductoRoutingModule,
    ReactiveFormsModule,
    ArchwizardModule
  ]
})
export class ProductoModule { }
