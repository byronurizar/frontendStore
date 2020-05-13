import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FullWidthComponent } from './layouts/full-width/full-width.component';
import { ContentComponent } from './layouts/content/content.component';
import { CompactSidebarComponent } from './layouts/compact-sidebar/compact-sidebar.component';
import { CompactSidebarIconsComponent } from './layouts/compact-sidebar-icons/compact-sidebar-icons.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './shared/service/firebase/auth.service';
import { AdminGuard } from './shared/guard/admin.guard';
import { SecureInnerPagesGuard } from './shared/guard/SecureInnerPagesGuard.guard';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './auth/login/login.component';
import { EnterpriseComponent } from './layouts/enterprise/enterprise.component';
import { CategoriaService } from './servicios/categoria.service';
import { ConectorApi } from './servicios/conectorApi.service';
import { IngresoSistemaComponent } from './misCompras/ingreso-sistema/ingreso-sistema.component';
import { RegistroComponent } from './misCompras/registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { InicioComponent } from './misCompras/inicio/inicio.component';
import { HomeVentasComponent } from './misCompras/home-ventas/home-ventas.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ComercioModule } from './components/misCompras/comercio/comercio.module';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FullWidthComponent,
    ContentComponent,
    CompactSidebarComponent,
    CompactSidebarIconsComponent,
    LoginComponent,
    EnterpriseComponent,
    IngresoSistemaComponent,
    RegistroComponent,
    InicioComponent,
    HomeVentasComponent
  ],
  imports: [
      CarouselModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    NgxDropzoneModule,
    CommonModule,
    ComercioModule
  ],
  providers: [AuthService, AdminGuard, SecureInnerPagesGuard, CookieService, CategoriaService, ConectorApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
