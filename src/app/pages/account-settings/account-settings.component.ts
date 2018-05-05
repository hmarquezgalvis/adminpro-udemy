import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document,
    private settingsService: SettingsService
  ) {
  }

  ngOnInit() {
    this.aplicarCheck(null);
  }

  cambiarColor(tema: string, link: any) {
    console.log(tema);
    this.aplicarCheck(link);

    let url = `assets/css/colors/${tema}.css`;
    this.document.getElementById('theme').setAttribute('href', url);
    this.settingsService.ajustes.tema = tema;
    this.settingsService.ajustes.temaUrl = url;
    this.settingsService.guardarAjustes();
  }

  aplicarCheck(link: any = null) {
    // console.log(this.settingsService.ajustes.tema);
    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores) {
      // console.log(ref.getAttribute('data-theme'));
      if (link!==null) {
        ref.classList.remove('working');
      } else if (this.settingsService.ajustes.tema === ref.getAttribute('data-theme')) {
        ref.classList.add('working');
        break;
      }
    }
    if (link!==null) {
      link.classList.add('working');
    }
  }
}
