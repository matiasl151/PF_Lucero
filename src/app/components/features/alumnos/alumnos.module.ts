import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { AlumnosDetallesComponent } from './alumnos-detalles/alumnos-detalles.component';
import { AlumnosEditarComponent } from './alumnos-editar/alumnos-editar.component';
import { AlumnosAgregarComponent } from './alumnos-agregar/alumnos-agregar.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';

@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosListaComponent,
    AlumnosDetallesComponent,
    AlumnosEditarComponent,
    AlumnosAgregarComponent,
  ],
  imports: [CommonModule, SharedModule, AlumnosRoutingModule],
})
export class AlumnosModule {}
