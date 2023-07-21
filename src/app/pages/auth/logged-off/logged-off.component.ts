import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-logged-off',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './logged-off.component.html',
  styleUrls: ['./logged-off.component.scss'],
})
export class LoggedOffComponent {}
