import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { UsuariosAgregarComponent } from './usuarios-agregar/usuarios-agregar.component';
import { UsuariosDetallesComponent } from './usuarios-detalles/usuarios-detalles.component';
import { UsuariosEditarComponent } from './usuarios-editar/usuarios-editar.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: '',
        component: UsuariosListaComponent
      },
      {
        path: 'agregar',
        component: UsuariosAgregarComponent
      },
      {
        path: 'detalles/:id',
        component: UsuariosDetallesComponent
      },
      {
        path: 'editar/:id',
        component: UsuariosEditarComponent
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
export class UsuariosRoutingModule { }
