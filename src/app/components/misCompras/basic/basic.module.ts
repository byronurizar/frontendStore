import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicRoutingModule } from './basic-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { RegCataloComponent } from './reg-catalo/reg-catalo.component';
import { GsCategoriaComponent } from './gs-categoria/gs-categoria.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [CategoriaComponent, RegCataloComponent, GsCategoriaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicRoutingModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class BasicModule { }

