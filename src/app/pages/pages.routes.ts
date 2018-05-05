import { RouterModule, Routes } from '@angular/router';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'ProgressBars' } },
      { path: 'graphics1', component: Graphics1Component, data: { title: 'Graphics' } },
      { path: 'promesas', component: PromesasComponent, data: { title: 'Promises' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account' } },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  },
];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
