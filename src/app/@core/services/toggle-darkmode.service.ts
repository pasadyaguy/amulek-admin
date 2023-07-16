import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleDarkmodeService {
  private renderer: Renderer2;
  private colorTheme: string = '';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme(): boolean {
    this.getColortheme();
    this.renderer.addClass(document.body, this.colorTheme);
    return this.isDarkMode();
  }

  private getColortheme() {
    if (localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme') as string;
    } else {
      this.colorTheme = 'light-mode';
    }
  }

  private setColortheme(theme: string) {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  update(theme: 'dark-mode' | 'light-mode') {
    this.setColortheme(theme);
    const previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  isDarkMode() {
    if (this.colorTheme === 'dark-mode') {
      return true;
    } else {
      return false;
    }
  }
}
