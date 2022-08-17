import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Curso } from 'src/app/models/curso.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
})
export class CursosListaComponent implements OnInit, AfterViewInit {
  columns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];

  dataSource = new MatTableDataSource<Curso>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe(cursos => {
      this.dataSource.data = cursos;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  eliminarCurso(id: number) {
    this.cursosService.deleteCurso(id).subscribe(curso => {
      this.cursosService.getCursos().subscribe(cursos => {
        this.dataSource.data = cursos;
      });
    });
  }
}
