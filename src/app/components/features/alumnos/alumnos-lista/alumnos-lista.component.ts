import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Alumno } from 'src/app/models/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss'],
})
export class AlumnosListaComponent implements OnInit, AfterViewInit {
  columns: string[] = ['id', 'nombre', 'apellido', 'edad', 'email', 'acciones'];

  dataSource = new MatTableDataSource<Alumno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.dataSource.data = alumnos;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  eliminarAlumno(id: number) {
    this.alumnosService.deleteAlumno(id).subscribe(alumno => {
      this.alumnosService.getAlumnos().subscribe(alumnos => {
        this.dataSource.data = alumnos;
      });
    });
  }
}
