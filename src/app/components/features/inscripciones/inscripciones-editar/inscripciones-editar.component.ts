import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';
import { Inscripcion } from 'src/app/models/inscripcion.interface';
import { Alumno } from 'src/app/models/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Curso } from 'src/app/models/curso.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-inscripciones-editar',
  templateUrl: './inscripciones-editar.component.html',
  styleUrls: ['./inscripciones-editar.component.scss'],
})
export class InscripcionesEditarComponent implements OnInit, OnDestroy {
  inscripcion: Inscripcion = {} as Inscripcion;
  id: number = 0;
  subscription!: Subscription;
  alumnos: Alumno[] = [];
  cursos: Curso[] = [];

  formularioEdit: FormGroup;
  constructor(
    private inscripcionesService: InscripcionesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private cursosService: CursosService
  ) {
    this.formularioEdit = this.fb.group({
      alumno: ['', Validators.required],
      curso: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.subscription = this.inscripcionesService
      .getInscripcion(this.id)
      .subscribe(inscripcionDB => {
        this.inscripcion = inscripcionDB;
        let nombre_completo =
          this.inscripcion.alumno.nombre +
          ' ' +
          this.inscripcion.alumno.apellido;
        this.formularioEdit.patchValue({
          alumno: nombre_completo,
          curso: this.inscripcion.curso.nombre,
        });
      });
    this.alumnosService.getAlumnos().subscribe(alumnosDB => {
      this.alumnos = alumnosDB;
    });
    this.cursosService.getCursos().subscribe(cursosDB => {
      this.cursos = cursosDB;
    });
  }

  editarInscripcion() {
    const inscripcion: Inscripcion = {
      id: this.inscripcion.id,
      alumno: this.formularioEdit.value.alumno,
      curso: this.formularioEdit.value.curso,
      fecha: new Date(),
    };
    this.inscripcionesService
      .updateInscripcion(inscripcion)
      .subscribe(inscripcionDB => {
        this.router.navigate(['/inscripciones']);
      });
  }

  goBack() {
    this.router.navigate(['/inscripciones']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
