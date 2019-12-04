import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { CKEditorModule } from 'ngx-ckeditor';

import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { NgxEditorModule } from 'ngx-editor';

import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    EditorRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    NgxEditorModule
  ]
})
export class EditorModule { }
