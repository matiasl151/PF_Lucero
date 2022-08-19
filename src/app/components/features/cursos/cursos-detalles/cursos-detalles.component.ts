import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Alumno } from 'src/app/models/alumno.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/models/curso.interface';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-cursos-detalles',
  templateUrl: './cursos-detalles.component.html',
  styleUrls: ['./cursos-detalles.component.scss'],
})
export class CursosDetallesComponent implements OnInit {
  curso: Curso = {} as Curso;
  id: number = 0;
  subscription!: Subscription;
  alumnos: Alumno[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService,
    private alumnosService: AlumnosService,
    private inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.cursosService.getCurso(this.id).subscribe(curso => {
      this.curso = curso;
    });
    this.inscripcionesService.getInscripciones().subscribe(inscripciones => {
      inscripciones.forEach(inscripcion => {
        if (inscripcion.curso.id == this.id) {
          this.alumnos.push(inscripcion.alumno);
        }
      });
    });
  }

  borrarAlumno(id: number): void {
    this.inscripcionesService.deleteInscripcionByAlumno(id);
    this.alumnos = this.alumnos.filter(alumno => alumno.id != id);
  }

  goBack(): void {
    this.router.navigate(['/cursos']);
  }
}
