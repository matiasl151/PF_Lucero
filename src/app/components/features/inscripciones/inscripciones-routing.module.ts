import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InscripcionesAgregarComponent } from './inscripciones-agregar/inscripciones-agregar.component';
import { InscripcionesDetallesComponent } from './inscripciones-detalles/inscripciones-detalles.component';
import { InscripcionesEditarComponent } from './inscripciones-editar/inscripciones-editar.component';
import { InscripcionesListaComponent } from './inscripciones-lista/inscripciones-lista.component';
import { InscripcionesComponent } from './inscripciones.component';

const routes: Routes = [
  {
    path: '',
    component: InscripcionesComponent,
    children: [
      {
        path: '',
        component: InscripcionesListaComponent
      },
      {
        path: 'agregar',
        component: InscripcionesAgregarComponent
      },
      {
        path: 'detalles/:id',
        component: InscripcionesDetallesComponent
      },
      {
        path: 'editar/:id',
        component: InscripcionesEditarComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
