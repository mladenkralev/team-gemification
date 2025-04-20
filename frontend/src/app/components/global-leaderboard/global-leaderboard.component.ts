import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-global-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-leaderboard.component.html',
  styleUrl: './global-leaderboard.component.css'
})
export class GlobalLeaderboardComponent {
  category: string = '';

  leaderboard: { name: string; points: number }[] = [];

  private allScores: { [key: string]: { name: string; points: number }[] } = {
    '3RD': [
      {name: 'Alex', points: 120},
      {name: 'Jess', points: 110},
      {name: 'Taylor', points: 98},
    ],
    Mentor: [
      {name: 'Mira', points: 115},
      {name: 'Alex', points: 97},
    ],
    Ideas: [
      {name: 'Taylor', points: 125},
      {name: 'Jess', points: 109},
    ],
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';

      const isUppercase = this.category === this.category.toUpperCase();
      const categoryExists = this.allScores.hasOwnProperty(this.category);

      // 🔍 Debug logs
      console.log(`Category from route: ${this.category}`);
      console.log(`Is uppercase: ${isUppercase}`);
      console.log(`Category exists in leaderboard: ${categoryExists}`);

      this.leaderboard = categoryExists ? this.allScores[this.category] : [];

      // Optional: log warning if category is not found
      if (!categoryExists) {
        console.warn(`⚠️ Leaderboard category "${this.category}" not found.`);
      }
    });
  }
}
