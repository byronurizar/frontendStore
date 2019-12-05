import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { GsCategoriaComponent } from './gs-categoria/gs-categoria.component';
const routes: Routes = [{
  path:'',
  children:[
    {
      path:'categoria',
      component:CategoriaComponent
    },
    {
      path:"gsCategoria",
      component:GsCategoriaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
