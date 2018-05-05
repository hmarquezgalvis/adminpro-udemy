import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  constructor(
      @Inject(DOCUMENT) private document
  ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes) );
    this.aplicarTema();
  }

  cargarAjustes() {
    // console.log('cargando ajustes');
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.aplicarTema();
  }

  aplicarTema() {
    this.document.getElementById('theme').setAttribute('href', this.ajustes.temaUrl);
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
