import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetallesComponent } from './cursos-detalles.component';

describe('CursosDetallesComponent', () => {
  let component: CursosDetallesComponent;
  let fixture: ComponentFixture<CursosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
