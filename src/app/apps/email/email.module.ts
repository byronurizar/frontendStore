import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ngx-ckeditor';

import { EmailRoutingModule } from './email-routing.module';
import { EmailAppComponent } from './emailApp/emailApp.component';

@NgModule({
  declarations: [EmailAppComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    EmailRoutingModule,
    NgbModule
  ]
})
export class EmailModule { }
