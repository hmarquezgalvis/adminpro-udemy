import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';
//declare var swal: any; /// para utilizar la misma libreria pero incluida como referencia de css/js en el html.

import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password_confirm: new FormControl(null, Validators.required),
      terms: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password_confirm') });

    // relleno de data de ejemplo
    // this.forma.setValue({
    //   nombre: 'Hector Marquez',
    //   email: 'hector.marquez.galvis@gmail.com',
    //   password: 'gbc123',
    //   password_confirm: 'gbc123!',
    //   terms: true
    // });
  }

  sonIguales(field: string, fieldCompare: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[field].value;
      let pass2 = group.controls[fieldCompare].value;

      if(pass1 === pass2) {
        return null;
      }
      return { sonIguales: true };
    };
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.terms) {
      swal("Importate", "Debe de aceptar las condiciones", "warning");
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    this.usuarioService.crearUsuario( usuario )
      .subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/login']);
        }
      );
  }

}
