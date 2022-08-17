import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesDetallesComponent } from './inscripciones-detalles.component';

describe('InscripcionesDetallesComponent', () => {
  let component: InscripcionesDetallesComponent;
  let fixture: ComponentFixture<InscripcionesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
