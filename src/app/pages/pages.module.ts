import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Rutas
import { PAGES_ROUTING } from './pages.routes';

// Shared Modulos
import { SharedModule } from '../shared/shared.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ChartsModule,
    PAGES_ROUTING
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    IncrementadorComponent,
    GraphicDoughnutComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  providers: []
})
export class PagesModule { }
