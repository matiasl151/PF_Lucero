import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesEditarComponent } from './inscripciones-editar.component';

describe('InscripcionesEditarComponent', () => {
  let component: InscripcionesEditarComponent;
  let fixture: ComponentFixture<InscripcionesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
