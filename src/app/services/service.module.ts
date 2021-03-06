import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SettingsService, SharedService, SidebarService, UsuarioService, LoginGuard } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    LoginGuard,
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService
  ]
})
export class ServiceModule { }
