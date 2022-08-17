import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosAgregarComponent } from './usuarios-agregar/usuarios-agregar.component';
import { UsuariosEditarComponent } from './usuarios-editar/usuarios-editar.component';
import { UsuariosDetallesComponent } from './usuarios-detalles/usuarios-detalles.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosListaComponent,
    UsuariosAgregarComponent,
    UsuariosEditarComponent,
    UsuariosDetallesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
