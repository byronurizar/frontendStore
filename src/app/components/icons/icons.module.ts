import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { IcoComponent } from './ico/ico.component';
import { ThemifyComponent } from './themify/themify.component';
import { WhetherComponent } from './whether/whether.component';

@NgModule({
  declarations: [FlagIconComponent, FontawesomeComponent, IcoComponent, ThemifyComponent, WhetherComponent],
  imports: [
    CommonModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
