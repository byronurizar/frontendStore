import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicRoutingModule } from './basic-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { RegCataloComponent } from './reg-catalo/reg-catalo.component';

@NgModule({
  declarations: [CategoriaComponent, RegCataloComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicRoutingModule,
    FormsModule
  ]
})
export class BasicModule { }

