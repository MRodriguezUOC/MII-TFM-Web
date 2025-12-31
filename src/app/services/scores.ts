import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Score {
  id: number;
  playedAt: string;
  points: number;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  private http = inject(HttpClient);

  private readonly API_URL = '/api/scores';

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.API_URL);
  }
}
