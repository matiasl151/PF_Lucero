import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosAgregarComponent } from './cursos-agregar/cursos-agregar.component';
import { CursosDetallesComponent } from './cursos-detalles/cursos-detalles.component';
import { CursosEditarComponent } from './cursos-editar/cursos-editar.component';
import { CursosComponent } from './cursos.component';

import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursosListaComponent,
    CursosAgregarComponent,
    CursosDetallesComponent,
    CursosEditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
