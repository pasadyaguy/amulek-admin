import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './@theme/components/layout/layout.component';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
})
export class AppComponent {
  title = 'amulek-admin';
}
