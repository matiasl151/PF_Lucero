import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/models/curso.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-agregar',
  templateUrl: './cursos-agregar.component.html',
  styleUrls: ['./cursos-agregar.component.scss'],
})
export class CursosAgregarComponent implements OnInit {
  formularioAdd: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private router: Router
  ) {
    this.formularioAdd = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioAdd.reset();
  }

  agregarCurso(): void {
    const curso: Curso = {
      id: this.cursosService.getLastId(),
      nombre: this.formularioAdd.value.nombre,
      descripcion: this.formularioAdd.value.descripcion,
    };
    this.cursosService.createCurso(curso).subscribe(() => {
      this.formularioAdd.reset();
    });
  }

  goBack(): void {
    this.router.navigate(['/cursos']);
  }
}
