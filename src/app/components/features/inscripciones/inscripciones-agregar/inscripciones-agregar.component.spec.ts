import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesAgregarComponent } from './inscripciones-agregar.component';

describe('InscripcionesAgregarComponent', () => {
  let component: InscripcionesAgregarComponent;
  let fixture: ComponentFixture<InscripcionesAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
