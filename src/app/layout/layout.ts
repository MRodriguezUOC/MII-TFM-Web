import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppState } from '../services/app-state';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  appState = inject(AppState);
}
