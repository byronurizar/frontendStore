import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatAppComponent } from './chat-app/chat-app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'app',
        component: ChatAppComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
