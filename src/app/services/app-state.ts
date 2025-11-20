import { Injectable, signal } from '@angular/core';
import { version } from '../../../package.json';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  //protected readonly title = signal('IAsRevenge Beta'); 
  public readonly title = signal('IAsRevenge pre-Alpha');
}
