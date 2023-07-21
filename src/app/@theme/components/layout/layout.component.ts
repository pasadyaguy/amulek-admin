import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';
import { UserInfo } from 'src/app/@core/interfaces/user-info';
import { SpinnerService } from 'src/app/@core/services/spinner.service';
import { ThemeService } from '../../theme.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressBarModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    UserComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  media = inject(MediaMatcher);
  spinnerService = inject(SpinnerService);
  changeDetectorRef = inject(ChangeDetectorRef);
  themeService = inject(ThemeService);

  private _mobileQueryListener!: () => void;
  mobileQuery!: MediaQueryList;
  showSpinner: boolean = false;
  themeToggle!: boolean;
  user: UserInfo = new UserInfo();

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  changeTheme() {
    this.themeToggle
      ? this.themeService.setTheme('light-mode')
      : this.themeService.setTheme('dark-mode');
    this.themeToggle = !this.themeToggle;
  }
}
