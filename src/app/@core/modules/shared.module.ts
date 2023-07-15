import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { AdminService } from '../services/admin.service';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [MaterialModule, ReactiveFormsModule, FormsModule, ThemeModule],
  declarations: [],
  providers: [AdminService],
})
export class SharedModule {}
