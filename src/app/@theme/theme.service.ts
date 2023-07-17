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

  setTheme(theme: 'dark-mode' | 'light-mode') {
    this.currentTheme = theme;
    const previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.themeChanges$.next({ theme, previous: previousColorTheme });
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
