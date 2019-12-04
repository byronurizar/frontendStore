import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from '../../shared/service/firebase/edit-user.resolver';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new-user',
        component: NewUserComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
        resolve: {
          data: EditUserResolver
        },
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
