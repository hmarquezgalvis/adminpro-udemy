import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/service.index';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  remember_email: string;
  remember_me: boolean = false;

  auth2: any;

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();

    this.remember_email = localStorage.getItem('email') || '';
    this.remember_me = (this.remember_email.length > 0);

    this.googleInit();
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
          client_id: '118919212745-j4bauj54f939k17dett661thgicl6vdh.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
      });

      this.attachSignIn( document.getElementById('btnGoogleLogin'));

      // // Listen for sign-in state changes.
      // this.auth2.isSignedIn.listen(signinChanged);
      //
      // // Listen for changes to current user.
      // this.auth2.currentUser.listen(userChanged);
      //
      // // Sign in the user if they are currently signed in.
      // if (this.auth2.isSignedIn.get() == true) {
      //   this.auth2.signIn();
      // }
      //
      // // Start with the current live values.
      // refreshValues();

    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      console.log(profile, token);
      this.usuarioService.loginGoogle(token)
        .subscribe(
          (logged) => {
            console.log(logged);
            this.router.navigate(['/dashboard']);
          },
          (err) => console.error(err)
        );
    });
  }

  ingresar(forma: NgForm) {
    if (!forma.valid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this.usuarioService.login(usuario, forma.value.remember_me)
      .subscribe(
        (logged) => this.router.navigate(['/dashboard']),
        (err) => console.error(err)
      );
  }

}
