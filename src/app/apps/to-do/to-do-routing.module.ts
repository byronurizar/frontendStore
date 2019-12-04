import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from './to-do-angular/to-do.component';
import { ToDoFirebaseComponent } from './to-do-firebase/to-do-firebase.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'todo',
        component: ToDoComponent,
      },
      {
        path: 'to-do-firebase',
        component: ToDoFirebaseComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
