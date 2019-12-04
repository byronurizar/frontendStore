import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: UsersProfileComponent
      },
      {
        path: 'edit',
        component: UsersEditComponent
      },
      {
        path: 'cards',
        component: UsersCardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
