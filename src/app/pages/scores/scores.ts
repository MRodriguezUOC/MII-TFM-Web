import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoresService, Score } from '../../services/scores';

@Component({
  selector: 'app-scores',
  imports: [CommonModule],
  templateUrl: './scores.html',
  styleUrl: './scores.scss',
})
export class Scores implements OnInit {
  private scoresService = inject(ScoresService);

  scores = signal<Score[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.scoresService.getScores().subscribe({
      next: (data) => {
        this.scores.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudo cargar la clasificación');
        this.loading.set(false);
      },
    });
  }
}

