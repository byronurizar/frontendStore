import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineOneComponent } from './timeline-one/timeline-one.component';
import { TimelineTwoComponent } from './timeline-two/timeline-two.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'one',
        component: TimelineOneComponent
      },
      {
        path: 'two',
        component: TimelineTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
