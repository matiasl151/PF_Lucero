import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Curso } from 'src/app/models/curso.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(environment.baseURL + '/api/v1/Cursos');
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(environment.baseURL + '/api/v1/Cursos/' + id);
  }

  isRepetido(curso: Curso): boolean {
    let repetido = false;
    this.getCursos().subscribe(cursos => {
      cursos.forEach(c => {
        if (c.nombre === curso.nombre && c.descripcion === curso.descripcion) {
          repetido = true;
        }
      });
    });
    return repetido;
  }

  createCurso(curso: Curso): Observable<any> {
    if (this.isRepetido(curso)) {
      return this.updateCurso(curso);
    } else {
      return this.http.post(environment.baseURL + '/api/v1/Cursos', curso);
    }
  }

  updateCurso(curso: Curso): Observable<any> {
    return this.http.put(
      environment.baseURL + '/api/v1/Cursos/' + curso.id,
      curso
    );
  }

  deleteCurso(id: number): Observable<any> {
    return this.http.delete(environment.baseURL + '/api/v1/Cursos/' + id);
  }

  getLastId(): number {
    let id = 0;
    this.getCursos().subscribe(cursos => {
      id = cursos[cursos.length - 1].id;
    });
    return id;
  }
}
