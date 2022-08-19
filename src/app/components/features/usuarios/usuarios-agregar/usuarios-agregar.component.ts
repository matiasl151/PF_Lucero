import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Usuario } from 'src/app/models/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-agregar',
  templateUrl: './usuarios-agregar.component.html',
  styleUrls: ['./usuarios-agregar.component.scss'],
})
export class UsuariosAgregarComponent implements OnInit {
  formularioAdd: FormGroup;
  roles: string[] = ['admin', 'user'];

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formularioAdd = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioAdd.reset();
  }

  agregarUsuario() {
    const usuario: Usuario = {
      email: this.formularioAdd.value.email,
      password: this.formularioAdd.value.password,
      role: this.formularioAdd.value.role,
      id: this.usuariosService.getLastId(),
    };
    this.usuariosService.crearUsuario(usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }

  goBack() {
    this.router.navigate(['/usuarios']);
  }
}
