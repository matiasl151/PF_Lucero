import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CursosAgregarComponent } from './cursos-agregar/cursos-agregar.component';
import { CursosDetallesComponent } from './cursos-detalles/cursos-detalles.component';
import { CursosEditarComponent } from './cursos-editar/cursos-editar.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    children: [
      {
        path: '',
        component: CursosListaComponent
      },
      {
        path: 'agregar',
        component: CursosAgregarComponent
      },
      {
        path: 'detalles/:id',
        component: CursosDetallesComponent
      },
      {
        path: 'editar/:id',
        component: CursosEditarComponent
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
export class CursosRoutingModule { }
