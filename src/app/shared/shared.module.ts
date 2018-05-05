import { NgModule } from '@angular/core';

// Componentes
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [],
  declarations: [
    NoPageFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  exports: [
    NoPageFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  providers: []
})
export class SharedModule { }
