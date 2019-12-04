import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineOneComponent } from './timeline-one/timeline-one.component';
import { TimelineTwoComponent } from './timeline-two/timeline-two.component';

@NgModule({
  declarations: [TimelineOneComponent, TimelineTwoComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule
  ]
})
export class TimelineModule { }
