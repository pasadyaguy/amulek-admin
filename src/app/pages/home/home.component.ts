import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/@theme/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
    ],
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.onThemeChange().subscribe((value) => {
      console.log(value);
    });
  }
}
