import { Injectable, signal } from '@angular/core';
import { version } from '../../../package.json';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public readonly appName = 'IAs Revenge';
  public readonly version = signal(version);
  public readonly title = signal(`${this.appName} (${version})`);
}
