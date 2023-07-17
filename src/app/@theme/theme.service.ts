import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, ReplaySubject, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private themeChanges$ = new ReplaySubject(1);
  currentTheme: string = 'light-mode';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme(): boolean {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.currentTheme);
    return true;
  }

  private getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      this.currentTheme = localStorage.getItem('user-theme') as string;
    } else {
      this.currentTheme = 'light-mode';
    }
  }

  private setColortheme(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  setTheme(theme: 'dark-mode' | 'light-mode') {
    this.setColortheme(theme);
    const previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.themeChanges$.next({ theme, previous: this.currentTheme });
    this.renderer.addClass(document.body, theme);
  }

  /**
   * Triggered when current theme is changed
   * @returns {Observable<any>}
   */
  onThemeChange(): Observable<any> {
    return this.themeChanges$.pipe(share());
  }
}
