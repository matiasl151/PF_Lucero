import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Usuario } from 'src/app/models/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios-detalles',
  templateUrl: './usuarios-detalles.component.html',
  styleUrls: ['./usuarios-detalles.component.scss'],
})
export class UsuariosDetallesComponent implements OnInit, OnDestroy {
  usuario: Usuario = {} as Usuario;
  id: number = 0;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.usuariosService.getUsuario(this.id).subscribe(usuario => {
        this.usuario = usuario;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/usuarios']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
