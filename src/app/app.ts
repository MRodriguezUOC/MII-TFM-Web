import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppState } from './services/app-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  appState = inject(AppState);
}
