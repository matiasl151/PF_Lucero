import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inscripcion } from 'src/app/models/inscripcion.interface';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Alumno } from 'src/app/models/alumno.interface';
import { Curso } from 'src/app/models/curso.interface';

@Component({
  selector: 'app-inscripciones-agregar',
  templateUrl: './inscripciones-agregar.component.html',
  styleUrls: ['./inscripciones-agregar.component.scss'],
})
export class InscripcionesAgregarComponent implements OnInit {
  formularioAdd: FormGroup;
  alumnos: Alumno[] = [];
  cursos: Curso[] = [];

  constructor(
    private inscripcionesService: InscripcionesService,
    private alumnosService: AlumnosService,
    private cursosService: CursosService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formularioAdd = this.fb.group({
      alumno: ['', Validators.required],
      curso: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;
    });
    this.cursosService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  agregarInscripcion() {
    const inscripcion: Inscripcion = {
      id: this.inscripcionesService.getLastId() + 1,
      alumno: this.formularioAdd.value.alumno,
      curso: this.formularioAdd.value.curso,
      fecha: new Date(),
    };
    this.inscripcionesService.createInscripcion(inscripcion).subscribe(() => {
      this.router.navigate(['/inscripciones']);
    });
  }

  goBack() {
    this.router.navigate(['/inscripciones']);
  }
}
