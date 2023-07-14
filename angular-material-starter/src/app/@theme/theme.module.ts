import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../@core/modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const COMPONENTS = [HeaderComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [...COMPONENTS],
  exports: [CommonModule, ...COMPONENTS],
})
export class ThemeModule {}
