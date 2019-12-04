import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailAppComponent } from './emailApp/emailApp.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'app',
        component: EmailAppComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
