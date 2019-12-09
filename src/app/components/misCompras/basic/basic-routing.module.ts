import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { GsCategoriaComponent } from './gs-categoria/gs-categoria.component';
import { GsEstadoComponent } from './gs-estado/gs-estado.component';
import { GsGeneroComponent } from './gs-genero/gs-genero.component';
import { GsDepartamentoComponent } from './gs-departamento/gs-departamento.component';
import { GsMunicipioComponent } from './gs-municipio/gs-municipio.component';
import { GsRolComponent } from './gs-rol/gs-rol.component';
import { GsProveedorComponent } from './gs-proveedor/gs-proveedor.component';
import { GsTelefonoProveedorComponent } from './gs-telefono-proveedor/gs-telefono-proveedor.component';
import { GsEtiquetaComponent } from './gs-etiqueta/gs-etiqueta.component';
import { GsTallasComponent } from './gs-tallas/gs-tallas.component';
import { GsColoresComponent } from './gs-colores/gs-colores.component';
import { GsCatalogoComponent } from './gs-catalogo/gs-catalogo.component';
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
    },
    {
      path:"gsEstado",
      component:GsEstadoComponent
    },
    {
      path:'gsGeneros',
      component:GsGeneroComponent
    },
    {
      path:'gsDepartamentos',
      component:GsDepartamentoComponent
    },
    {
      path:'gsMunicipios',
      component:GsMunicipioComponent
    },
    {
      path:'gsRoles',
      component:GsRolComponent
    },
    {
      path:'gsProveedor',
      component:GsProveedorComponent
    },
    {
      path:'gsTelefonosProveedores',
      component:GsTelefonoProveedorComponent
    },
    {
      path:'gsEtiquetas',
      component:GsEtiquetaComponent
    },
    {
      path:'gsTallas',
      component:GsTallasComponent
    },
    {
      path:'gsColores',
      component:GsColoresComponent
    },
    {
      path:'gsCatalogos',
      component:GsCatalogoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
