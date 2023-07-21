import { Routes } from '@angular/router';
import { LayoutComponent } from '../@theme/components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        data: { title: 'Home' },
        component: HomeComponent,
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin-routing').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];
