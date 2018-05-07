import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { URL_SERVICIOS } from '../../config/config';

import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    console.log('servicio de usuario listo!')
    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 5);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario, recordar: boolean) {
    // localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    this.usuario = usuario;
    this.token = token;
  }

  loginGoogle(token: string) {
    let url = `${URL_SERVICIOS}/login/google`;
    return this.http.post(url, { 'token': token })
      .pipe(
        map( (data: any) => {
          this.guardarStorage(data.usuario.id, data.token, data.usuario, false);
          return true;
        })
      );
  }

  login(usuario: Usuario, recordar: boolean = false) {
    let url = `${URL_SERVICIOS}/login`;
    return this.http.post(url, usuario)
      .pipe(
        map( (data: any) => {
          this.guardarStorage(data.usuario.id, data.token, data.usuario, recordar);
          return true;
        })
      );
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);

  }

  crearUsuario(usuario: Usuario) {
    let url = `${URL_SERVICIOS}/usuario`;

    return this.http.post(url, usuario).pipe(
      map( (data: any) => {
        swal('Usuario Creado!', usuario.email, 'success');
        return data.usuario
      })
    );
  }

}
