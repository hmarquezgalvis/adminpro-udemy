import { NgModule } from '@angular/core';

// Rutas
import { PAGES_ROUTING } from './pages.routes';

// Shared Modulos
import { SharedModule } from '../shared/shared.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTING
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  providers: []
})
export class PagesModule { }
