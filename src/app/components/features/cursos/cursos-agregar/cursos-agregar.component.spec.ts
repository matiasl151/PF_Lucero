import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAgregarComponent } from './cursos-agregar.component';

describe('CursosAgregarComponent', () => {
  let component: CursosAgregarComponent;
  let fixture: ComponentFixture<CursosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
