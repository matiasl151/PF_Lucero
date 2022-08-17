import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  constructor(private http: HttpClient) {}

  getInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(
      environment.baseURL + 'api/v1/Inscripciones'
    );
  }

  getInscripcion(id: number): Observable<Inscripcion> {
    return this.http.get<Inscripcion>(
      environment.baseURL + 'api/v1/Inscripciones/' + id
    );
  }

  isRepetida(inscripcion: Inscripcion): boolean {
    let repetida = false;
    this.getInscripciones().subscribe(inscripciones => {
      inscripciones.forEach(i => {
        if (
          i.alumno.id === inscripcion.alumno.id &&
          i.curso.id === inscripcion.curso.id
        ) {
          repetida = true;
        }
      });
    });
    return repetida;
  }

  createInscripcion(inscripcion: Inscripcion): Observable<any> {
    if (this.isRepetida(inscripcion)) {
      return this.updateInscripcion(inscripcion);
    } else {
      return this.http.post(
        environment.baseURL + 'api/v1/Inscripciones',
        inscripcion
      );
    }
  }

  updateInscripcion(inscripcion: Inscripcion): Observable<any> {
    return this.http.put(
      environment.baseURL + 'api/v1/Inscripciones/' + inscripcion.id,
      inscripcion
    );
  }

  deleteInscripcion(id: number): Observable<any> {
    return this.http.delete(environment.baseURL + 'api/v1/Inscripciones/' + id);
  }

  deleteInscripcionByAlumno(id: number) {
    let idInscripcion: number;
    this.getInscripciones().subscribe(inscripciones => {
      inscripciones.forEach(inscripcion => {
        if (inscripcion.alumno.id === id) {
          idInscripcion = inscripcion.id;
          this.deleteInscripcion(idInscripcion).subscribe(res => {
            console.log(res);
          });
        }
      });
    });
  }

  deleteInscripcionByCurso(id: number) {
    let idInscripcion: number;
    this.getInscripciones().subscribe(inscripciones => {
      inscripciones.forEach(inscripcion => {
        if (inscripcion.curso.id === id) {
          idInscripcion = inscripcion.id;
          this.deleteInscripcion(idInscripcion).subscribe(res => {
            console.log(res);
          });
        }
      });
    });
  }

  getLastId(): number {
    let id = 0;
    this.getInscripciones().subscribe(inscripciones => {
      id = inscripciones[inscripciones.length - 1].id;
    });
    return id;
  }
}
