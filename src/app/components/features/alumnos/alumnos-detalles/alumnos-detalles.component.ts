import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Alumno } from 'src/app/models/alumno.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/models/curso.interface';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-alumnos-detalles',
  templateUrl: './alumnos-detalles.component.html',
  styleUrls: ['./alumnos-detalles.component.scss'],
})
export class AlumnosDetallesComponent implements OnInit, OnDestroy {
  alumno: Alumno = {} as Alumno;
  id: number = 0;
  subscription!: Subscription;
  cursosAlumno: Curso[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alumnosService: AlumnosService,
    private cursosService: CursosService,
    private inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.alumnosService.getAlumno(this.id).subscribe(alumno => {
        this.alumno = alumno;
      });
    });

    this.inscripcionesService.getInscripciones().subscribe(inscripciones => {
      inscripciones.forEach(inscripcion => {
        if (inscripcion.alumno.id === this.id) {
          this.cursosService.getCurso(inscripcion.curso.id).subscribe(curso => {
            this.cursosAlumno.push(curso);
          });
        }
      });
    });
  }

  borrarCurso(): void {}

  goBack(): void {
    this.router.navigate(['/alumnos']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
