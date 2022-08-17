import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesListaComponent } from './inscripciones-lista/inscripciones-lista.component';
import { InscripcionesAgregarComponent } from './inscripciones-agregar/inscripciones-agregar.component';
import { InscripcionesDetallesComponent } from './inscripciones-detalles/inscripciones-detalles.component';
import { InscripcionesEditarComponent } from './inscripciones-editar/inscripciones-editar.component';
import { InscripcionesComponent } from './inscripciones.component';

import { SharedModule } from 'src/app/shared/modules/shared.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';

@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesListaComponent,
    InscripcionesAgregarComponent,
    InscripcionesDetallesComponent,
    InscripcionesEditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
