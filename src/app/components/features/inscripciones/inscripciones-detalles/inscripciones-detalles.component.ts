import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Inscripcion } from 'src/app/models/inscripcion.interface';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-inscripciones-detalles',
  templateUrl: './inscripciones-detalles.component.html',
  styleUrls: ['./inscripciones-detalles.component.scss'],
})
export class InscripcionesDetallesComponent implements OnInit, OnDestroy {
  inscripcion: Inscripcion = {} as Inscripcion;
  id: number = 0;
  subscription!: Subscription;

  constructor(
    private inscripcionesService: InscripcionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.inscripcionesService
        .getInscripcion(this.id)
        .subscribe(inscripcion => {
          this.inscripcion = inscripcion;
        });
    });
  }

  goBack(): void {
    this.router.navigate(['/inscripciones']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
