import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatAppComponent } from './chat-app/chat-app.component';

@NgModule({
  declarations: [ChatAppComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
