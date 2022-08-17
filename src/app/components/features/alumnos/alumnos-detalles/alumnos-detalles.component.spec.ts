import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDetallesComponent } from './alumnos-detalles.component';

describe('AlumnosDetallesComponent', () => {
  let component: AlumnosDetallesComponent;
  let fixture: ComponentFixture<AlumnosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosDetallesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
