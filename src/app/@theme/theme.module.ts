import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../@core/modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const COMPONENTS = [HeaderComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [...COMPONENTS],
  exports: [CommonModule, ...COMPONENTS],
})
export class ThemeModule {}
