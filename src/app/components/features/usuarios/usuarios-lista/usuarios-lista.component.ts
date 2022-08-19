import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Usuario } from 'src/app/models/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss'],
})
export class UsuariosListaComponent implements OnInit, AfterViewInit {
  columns: string[] = ['id', 'email', 'rol', 'acciones'];

  dataSource = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.dataSource.data = usuarios;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminarUsuario(id: number) {
    this.usuariosService.eliminarUsuario(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        usuario => usuario.id !== id
      );
    });
  }
}
