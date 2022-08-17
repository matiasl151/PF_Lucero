import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'alumnos',
        loadChildren: () => import('../../features/alumnos/alumnos.module').then(m => m.AlumnosModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../../features/usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../../features/cursos/cursos.module').then(m => m.CursosModule)
      },
      {
        path: 'inscripciones',
        loadChildren: () => import('../../features/inscripciones/inscripciones.module').then(m => m.InscripcionesModule)
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
export class MainRoutingModule { }
