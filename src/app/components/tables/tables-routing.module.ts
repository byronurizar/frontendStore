import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './bootstrap-tables/basic/basic.component';
import { SizingComponent } from './bootstrap-tables/sizing/sizing.component';
import { BorderComponent } from './bootstrap-tables/border/border.component';
import { StylingComponent } from './bootstrap-tables/styling/styling.component';
import { BasicNgxDatatableComponent } from './ngx-datatables/basic/basic.component';
import { EditingComponent } from './ngx-datatables/editing/editing.component';
import { FilterNgxComponent } from './ngx-datatables/filter/filter.component';
import { FullscreenComponent } from './ngx-datatables/fullscreen/fullscreen.component';
import { PagingComponent } from './ngx-datatables/paging/paging.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { SelectionNgxComponent } from './ngx-datatables/selection/selection.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'sizing',
        component: SizingComponent
      },
      {
        path: 'border',
        component: BorderComponent
      },
      {
        path: 'styling',
        component: StylingComponent
      },
      {
        path: 'ngx-datatables/basic',
        component: BasicNgxDatatableComponent
      },
      {
        path: 'ngx-datatables/editing',
        component: EditingComponent
      },
      {
        path: 'ngx-datatables/filter',
        component: FilterNgxComponent
      },
      {
        path: 'ngx-datatables/fullscreen',
        component: FullscreenComponent
      },
      {
        path: 'ngx-datatables/paging',
        component: PagingComponent
      },
      {
        path: 'ngx-datatables/selection',
        component: SelectionNgxComponent
      },
      {
        path: 'smart-table',
        component: SmartTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
