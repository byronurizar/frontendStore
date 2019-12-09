import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Components
import { LandingComponent } from './landing/landing.component';
import { ContentComponent } from './layouts/content/content.component';
import { FullWidthComponent } from './layouts/full-width/full-width.component';
import { CompactSidebarComponent } from './layouts/compact-sidebar/compact-sidebar.component';
import { CompactSidebarIconsComponent } from './layouts/compact-sidebar-icons/compact-sidebar-icons.component';
// Routes
import { content } from "./shared/routes/content.routes";
import { compactSidebar } from "./shared/routes/compact-sidebar.routes";
import { compactSidebarIcons } from "./shared/routes/compact-sidebar-icons.routes";
import { full } from "./shared/routes/full.routes";
import { AdminGuard } from './shared/guard/admin.guard';
import { LoginComponent } from './auth/login/login.component';
import { SecureInnerPagesGuard } from './shared/guard/SecureInnerPagesGuard.guard';
import { IngresoSistemaComponent } from './misCompras/ingreso-sistema/ingreso-sistema.component';
import { RegistroComponent } from './misCompras/registro/registro.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: '',
    component: ContentComponent,
    children: content,
    canActivate: [AdminGuard]
  },
  {
    path: 'compact-sidebar',
    component: CompactSidebarComponent,
    children: compactSidebar,
  },
  {
    path: 'compact-sidebar-icons',
    component: CompactSidebarIconsComponent,
    children: compactSidebarIcons
  },
  {
    path: '',
    component: FullWidthComponent,
    children: full
  },
  {
    path:'ingresosSistema',
    component:IngresoSistemaComponent
  },
  {
    path:'registrarse',
    component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}