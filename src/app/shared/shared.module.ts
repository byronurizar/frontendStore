import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CompactSidebarComponent } from './components/compact-sidebar/compact-sidebar.component';
import { CompactSidebarIconsComponent } from './components/compact-sidebar-icons/compact-sidebar-icons.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { NavService} from './service/nav.service';
import { TranslateModule } from '@ngx-translate/core';
import { ChatService } from './service/chat.service';
import { CustomizerComponent } from './components/customizer/customizer.component';
import {LoaderComponent } from './components/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoaderComponent,HeaderComponent, FooterComponent, SidebarComponent, CompactSidebarComponent, CompactSidebarIconsComponent, ChatSidebarComponent, ToggleFullscreenDirective, CustomizerComponent],
  imports: [CommonModule, RouterModule,TranslateModule,FormsModule,NgbModule],
  exports: [LoaderComponent,HeaderComponent, TranslateModule,FooterComponent, SidebarComponent, CompactSidebarComponent, CompactSidebarIconsComponent, ChatSidebarComponent, ToggleFullscreenDirective, CustomizerComponent],
  providers:[NavService,ChatService]
})
export class SharedModule { }
