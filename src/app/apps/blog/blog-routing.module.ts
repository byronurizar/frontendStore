import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'details',
        component: BlogDetailsComponent
      },
      {
        path: 'single',
        component: BlogSingleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
