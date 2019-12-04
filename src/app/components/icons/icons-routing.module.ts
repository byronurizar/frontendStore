import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { IcoComponent } from './ico/ico.component';
import { ThemifyComponent } from './themify/themify.component';
import { WhetherComponent } from './whether/whether.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag',
        component: FlagIconComponent
      },
      {
        path: 'fontawesome',
        component: FontawesomeComponent
      },
      {
        path: 'ico',
        component: IcoComponent
      },
      {
        path: 'themify',
        component: ThemifyComponent
      },
      {
        path: 'whether',
        component: WhetherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
