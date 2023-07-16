import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleDarkmodeService {
  // private isDarkMode = new BehaviorSubject<boolean>(false);
  private renderer: Renderer2;
  private colorTheme: string = 'light-mode';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.getColortheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  update(theme: 'dark-mode' | 'light-mode') {
    this.setColortheme(theme);
    const previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  isDarkMode() {
    return this.colorTheme === 'dark-mode';
  }

  private setColortheme(theme: string) {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  private getColortheme() {
    if (localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme') as string;
    } else {
      this.colorTheme = 'light-mode';
    }
  }

  // getIsExpanded() {
  //   return this.isDarkMode.asObservable();
  // }

  // toggleValue() {
  //   this.isDarkMode.next(!this.isDarkMode.value);
  //   this.setColortheme(this.isDarkMode.value);
  // }

  // this.toggleControl.valueChanges.subscribe((darkMode) => {
  //   const darkClassName = 'darkMode';
  //   this.className = darkMode ? darkClassName : '';
  // });
}
