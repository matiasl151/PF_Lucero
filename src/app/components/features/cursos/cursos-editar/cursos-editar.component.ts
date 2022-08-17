import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/models/curso.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-editar',
  templateUrl: './cursos-editar.component.html',
  styleUrls: ['./cursos-editar.component.scss'],
})
export class CursosEditarComponent implements OnInit, OnDestroy {
  curso: Curso = {} as Curso;
  id: number = 0;
  subscription!: Subscription;

  formularioEdit: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private cursosService: CursosService
  ) {
    this.formularioEdit = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.cursosService.getCurso(this.id).subscribe((curso: Curso) => {
      this.curso = curso;
      this.formularioEdit.setValue({
        nombre: this.curso.nombre,
        descripcion: this.curso.descripcion,
      });
    });
  }

  editCurso() {
    const curso = this.formularioEdit.value as Curso;
    this.cursosService.updateCurso(curso).subscribe(() => {
      this.router.navigate(['/cursos']);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
