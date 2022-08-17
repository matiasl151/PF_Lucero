import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(environment.baseURL + '/api/v1/Alumnos');
  }

  getAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(environment.baseURL + '/api/v1/Alumnos/' + id);
  }

  createAlumno(alumno: Alumno): Observable<any> {
    return this.http.post(environment.baseURL + '/api/v1/Alumnos', alumno);
  }

  updateAlumno(id: number, alumno: Alumno): Observable<any> {
    return this.http.put(environment.baseURL + '/api/v1/Alumnos/' + id, alumno);
  }

  deleteAlumno(id: number): Observable<any> {
    return this.http.delete(environment.baseURL + '/api/v1/Alumnos/' + id);
  }

  getLastId(): number {
    let id = 0;
    this.getAlumnos().subscribe(alumnos => {
      id = alumnos[alumnos.length - 1].id;
    });
    return id;
  }
}
