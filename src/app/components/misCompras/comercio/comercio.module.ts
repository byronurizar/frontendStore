import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercioRoutingModule } from './comercio-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { VistaRapidaComponent } from './vista-rapida/vista-rapida.component';


@NgModule({
  declarations: [ProductosComponent, VistaRapidaComponent],
  imports: [
    CommonModule,
    ComercioRoutingModule
  ]
})
export class ComercioModule { }
