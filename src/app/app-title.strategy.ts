import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { AppState } from './services/app-state';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly appState = inject(AppState);

  override updateTitle(routerState: RouterStateSnapshot) {
    const pageTitle = this.buildTitle(routerState);
    const appName = this.appState.title();

    const fullTitle = pageTitle
      ? `${pageTitle} | ${appName}`
      : appName;

    this.title.setTitle(fullTitle);
  }
}
