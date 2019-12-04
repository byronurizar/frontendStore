import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountToModule } from 'angular-count-to';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    Ng2SmartTableModule,
    CountToModule
  ]
})
export class SupportModule { }
