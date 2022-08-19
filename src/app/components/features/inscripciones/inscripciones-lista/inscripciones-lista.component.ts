import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Inscripcion } from 'src/app/models/inscripcion.interface';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.scss'],
})
export class InscripcionesListaComponent implements OnInit, AfterViewInit {
  columns: string[] = ['id', 'curso', 'alumno', 'fecha', 'acciones'];

  dataSource = new MatTableDataSource<Inscripcion>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private inscripcionesService: InscripcionesService) {}

  ngOnInit(): void {
    this.inscripcionesService.getInscripciones().subscribe(inscripciones => {
      this.dataSource.data = inscripciones;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminarInscripcion(id: number): void {
    this.inscripcionesService.deleteInscripcion(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        inscripcion => inscripcion.id !== id
      );
    });
  }
}
