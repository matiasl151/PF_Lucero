import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './alumnos.component';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { AlumnosDetallesComponent } from './alumnos-detalles/alumnos-detalles.component';
import { AlumnosEditarComponent } from './alumnos-editar/alumnos-editar.component';
import { AlumnosAgregarComponent } from './alumnos-agregar/alumnos-agregar.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent,
    children: [
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
      {
        path: 'lista',
        component: AlumnosListaComponent,
      },
      {
        path: 'detalles/:id',
        component: AlumnosDetallesComponent,
      },
      {
        path: 'editar/:id',
        component: AlumnosEditarComponent,
      },
      {
        path: 'agregar',
        component: AlumnosAgregarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
