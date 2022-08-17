import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Alumno } from 'src/app/models/alumno.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-agregar',
  templateUrl: './alumnos-agregar.component.html',
  styleUrls: ['./alumnos-agregar.component.scss'],
})
export class AlumnosAgregarComponent implements OnInit {
  formularioAdd: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private router: Router
  ) {
    this.formularioAdd = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioAdd.reset();
  }

  agregarAlumno(): void {
    const alumno: Alumno = {
      id: this.alumnosService.getLastId(),
      nombre: this.formularioAdd.value.nombre,
      apellido: this.formularioAdd.value.apellido,
      edad: this.formularioAdd.value.edad,
      email: this.formularioAdd.value.email,
    };
    this.alumnosService.createAlumno(alumno).subscribe(() => {
      this.formularioAdd.reset();
    });
  }

  goBack(): void {
    this.router.navigate(['/alumnos']);
  }
}
