import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@core/modules/shared.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  declarations: [AdminComponent, SettingsComponent, ...routedComponents],
})
export class AdminModule {}
