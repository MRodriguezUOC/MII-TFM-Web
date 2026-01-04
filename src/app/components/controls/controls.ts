import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTROLS } from './controls.data';

@Component({
  selector: 'app-controls',
  imports: [CommonModule],
  templateUrl: './controls.html',
  styleUrl: './controls.scss',
})
export class Controls {
  sections = CONTROLS;
  isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
  }  
}
