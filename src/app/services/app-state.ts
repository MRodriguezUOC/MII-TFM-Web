import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  //protected readonly title = signal('IAsRevenge Beta'); 
  public readonly title = signal('IAsRevenge pre-Alpha');
}
