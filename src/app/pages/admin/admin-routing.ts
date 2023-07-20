import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'settings',
        data: { title: 'Settings' },
        component: SettingsComponent,
      },
      {
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full',
      },
    ],
  },
];
