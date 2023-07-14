import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminService } from 'src/app/@core/services/admin.service';
import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'settings',
        data: { title: 'Settings' },
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminService],
})
export class AdminRoutingModule {}

export const routedComponents = [AdminComponent];
