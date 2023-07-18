import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../@core/modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './components/user/user.component';
import { ThemeService } from './theme.service';

const COMPONENTS = [HeaderComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [...COMPONENTS, UserComponent],
  exports: [CommonModule, ...COMPONENTS, UserComponent],
  providers: [ThemeService],
})
export class ThemeModule {}
