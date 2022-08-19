import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('/api/users');
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`/api/users/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post('/api/users/', usuario);
  }

  actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(`/api/users/${usuario.id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`/api/users/${id}`);
  }

  getLastId(): number {
    let lastId = 0;
    this.getUsuarios().subscribe(usuarios => {
      lastId = usuarios[usuarios.length - 1].id;
    });
    return lastId;
  }
}
