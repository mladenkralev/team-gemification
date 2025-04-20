import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  topUsers = [
    { rank: 1, name: 'Dimitar G', points: 120 },
    { rank: 2, name: 'Valentin', points: 110 },
    { rank: 3, name: 'Dimitar P', points: 102 },
    { rank: 4, name: 'Kristina', points: 96 },
    { rank: 5, name: 'Georgi', points: 85 }
  ];

  constructor(private route: ActivatedRoute) {
  }

}
