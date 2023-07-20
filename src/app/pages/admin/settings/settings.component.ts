import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [MatCardModule, RouterLink]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
