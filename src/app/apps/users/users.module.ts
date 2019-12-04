import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountToModule } from 'angular-count-to';

import { UsersRoutingModule } from './users-routing.module';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';



@NgModule({
  declarations: [UsersProfileComponent, UsersEditComponent, UsersCardsComponent],
  imports: [
    CommonModule,
    CountToModule,
    UsersRoutingModule,
    GalleryModule.forRoot()
  ]
})
export class UsersModule { }
