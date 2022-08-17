import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEditarComponent } from './cursos-editar.component';

describe('CursosEditarComponent', () => {
  let component: CursosEditarComponent;
  let fixture: ComponentFixture<CursosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
