import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared.module';
import { LoginComponent } from './components/core/login/login.component';
import { MainComponent } from './components/core/main/main.component';

import { AlumnosModule } from './components/features/alumnos/alumnos.module';
import { CursosModule } from './components/features/cursos/cursos.module';
import { InscripcionesModule } from './components/features/inscripciones/inscripciones.module';
import { UsuariosModule } from './components/features/usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './components/core/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    UsuariosModule,
    HttpClientModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
