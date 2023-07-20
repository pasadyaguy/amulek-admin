import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-logged-off',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './logged-off.component.html',
  styleUrls: ['./logged-off.component.scss'],
})
export class LoggedOffComponent {}
