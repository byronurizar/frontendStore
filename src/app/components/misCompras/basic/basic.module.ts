import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicRoutingModule } from './basic-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { RegCataloComponent } from './reg-catalo/reg-catalo.component';
import { GsCategoriaComponent } from './gs-categoria/gs-categoria.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GsEstadoComponent } from './gs-estado/gs-estado.component';
import { GsGeneroComponent } from './gs-genero/gs-genero.component';
import { GsDepartamentoComponent } from './gs-departamento/gs-departamento.component';
import { GsMunicipioComponent } from './gs-municipio/gs-municipio.component';
import { GsRolComponent } from './gs-rol/gs-rol.component';
import { GsProveedorComponent } from './gs-proveedor/gs-proveedor.component';

@NgModule({
  declarations: [CategoriaComponent, RegCataloComponent, GsCategoriaComponent, GsEstadoComponent, GsGeneroComponent, GsDepartamentoComponent, GsMunicipioComponent, GsRolComponent, GsProveedorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicRoutingModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class BasicModule { }

