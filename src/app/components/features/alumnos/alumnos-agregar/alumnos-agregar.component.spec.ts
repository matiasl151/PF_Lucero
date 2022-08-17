import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAgregarComponent } from './alumnos-agregar.component';

describe('AlumnosAgregarComponent', () => {
  let component: AlumnosAgregarComponent;
  let fixture: ComponentFixture<AlumnosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
