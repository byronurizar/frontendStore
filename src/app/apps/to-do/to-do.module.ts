import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToDoRoutingModule } from './to-do-routing.module';
import {ToDoComponent } from './to-do-angular/to-do.component';
import { ToDoFirebaseComponent} from './to-do-firebase/to-do-firebase.component';

@NgModule({
  declarations: [
  ToDoComponent,
  ToDoFirebaseComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    ToDoRoutingModule,
    NgbModule,
  ],
})
export class ToDoModule { }
