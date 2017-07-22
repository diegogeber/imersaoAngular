import { Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../shared/usuario';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
   this.getUsuarios();
  }
  create(usuario: Usuario):void{
  
  }


   getUsuarios(): void {
      this.usuarioService.getUsuarios().then(usuarios => this.usuarios = usuarios);
    }


}
