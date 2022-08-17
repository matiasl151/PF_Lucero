import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Alumno } from 'src/app/models/alumno.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alumnos-editar',
  templateUrl: './alumnos-editar.component.html',
  styleUrls: ['./alumnos-editar.component.scss'],
})
export class AlumnosEditarComponent implements OnInit, OnDestroy {
  alumno: Alumno = {} as Alumno;
  id: number = 0;
  subscription!: Subscription;

  formularioEdit: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private alumnosService: AlumnosService
  ) {
    this.formularioEdit = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.alumnosService.getAlumno(this.id).subscribe((alumno: Alumno) => {
      this.alumno = alumno;
      this.formularioEdit.setValue({
        nombre: this.alumno.nombre,
        apellido: this.alumno.apellido,
        edad: this.alumno.edad,
        email: this.alumno.email,
      });
    });
  }

  editAlumno() {
    const alumno = this.formularioEdit.value as Alumno;
    this.alumnosService.updateAlumno(this.id, alumno).subscribe(() => {
      this.router.navigate(['/alumnos']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
