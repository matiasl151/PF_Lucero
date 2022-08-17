import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosEditarComponent } from './alumnos-editar.component';

describe('AlumnosEditarComponent', () => {
  let component: AlumnosEditarComponent;
  let fixture: ComponentFixture<AlumnosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
