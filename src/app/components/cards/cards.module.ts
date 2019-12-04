import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { CardsRoutingModule } from './cards-routing.module';
import { BasicComponent } from './basic/basic.component';
import { CreativeComponent } from './creative/creative.component';
import { TabbedComponent } from './tabbed/tabbed.component';
import { DraggableComponent } from './draggable/draggable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BasicComponent, CreativeComponent, TabbedComponent, DraggableComponent],
  imports: [
    CommonModule,
    DragulaModule.forRoot(),
    CardsRoutingModule,
    NgbModule
  ]
})
export class CardsModule { }
