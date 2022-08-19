import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.scss'],
})
export class UsuariosEditarComponent implements OnInit, OnDestroy {
  usuario: Usuario = {} as Usuario;
  id: number = 0;
  subscription!: Subscription;
  roles: string[] = ['admin', 'user'];

  formularioEdit: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) {
    this.formularioEdit = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.usuariosService.getUsuario(this.id).subscribe(usuario => {
        this.usuario = usuario;
        this.formularioEdit.patchValue({
          email: this.usuario.email,
          password: this.usuario.password,
          role: this.usuario.role,
        });
      });
    });
  }

  editarUsuario(): void {
    const usuario: Usuario = {
      id: this.id,
      email: this.formularioEdit.value.email,
      password: this.formularioEdit.value.password,
      role: this.formularioEdit.value.role,
    };
    this.usuariosService.actualizarUsuario(usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }

  goBack(): void {
    this.router.navigate(['/usuarios']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
