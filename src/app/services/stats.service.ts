import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private stats: Stat[] = [
    { icon: '📅', value: '4+', label: 'Years Experience' },
    { icon: '🎮', value: '10+', label: 'Completed Games' },
    { icon: '🚀', value: '+40%', label: 'Engagement Boost' },
    { icon: '👥', value: '950+', label: 'Community Size Managed' },
    { icon: '⚡', value: '25%', label: 'Deployment Time Boost' }
  ];

  getStats(): Observable<Stat[]> {
    return of(this.stats);
  }
}