import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-global-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-leaderboard.component.html',
  styleUrl: './global-leaderboard.component.css'
})
export class GlobalLeaderboardComponent {
  topUsers = [
    { rank: 1, name: 'Alex', points: 120 },
    { rank: 2, name: 'Jess', points: 110 },
    { rank: 3, name: 'Mira', points: 102 },
    { rank: 4, name: 'Sam', points: 96 },
    { rank: 5, name: 'Taylor', points: 85 }
  ];
}
