import { Alumno } from './alumno.interface';
import { Curso } from './curso.interface';

export interface Inscripcion {
  id: number;
  alumno: Alumno;
  curso: Curso;
  fecha: Date;
}
