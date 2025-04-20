import {Component} from '@angular/core';
import {SidebarComponent} from "../components/sidebar/sidebar.component";
import {TopbarComponent} from "../components/topbar/topbar.component";
import {ProgressCardComponent} from "../components/progress-card/progress-card.component";
import {CommonModule} from "@angular/common";
import {KudosHistoryComponent} from "../components/kudos-history/kudos-history.component";
import {KudosAvailableComponent} from "../components/kudos-available/kudos-available.component";
import {GiveKudosComponent} from "../components/give-kudos/give-kudos.component";
import {Router} from "@angular/router";
import {LeaderboardComponent} from "../components/leaderboard/leaderboard.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    TopbarComponent,
    ProgressCardComponent,
    KudosHistoryComponent,
    KudosAvailableComponent,
    LeaderboardComponent,
    GiveKudosComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private router: Router) {
  }

  cardItems = [
    {
      category: '3RD',
      icon: 'fa fa-fire',
      iconColor: '#E53935', // fiery red
      rank: 8,
      progressToNext: 65,
      pointsNeeded: 45
    },
    {
      category: 'Mentor',
      icon: 'fa fa-user',
      iconColor: '#6D4C41', // earthy brown
      rank: 4,
      progressToNext: 50,
      pointsNeeded: 20
    },
    {
      category: 'Reviewer',
      icon: 'fa fa-search',
      iconColor: '#FBC02D', // bold yellow
      rank: 3,
      progressToNext: 40,
      pointsNeeded: 10
    },
    {
      category: 'Team player',
      icon: 'fa fa-users',
      iconColor: '#29B6F6', // fresh blue
      rank: 2,
      progressToNext: 80,
      pointsNeeded: 5
    },
    {
      category: '0 bugs dev',
      icon: 'fa fa-bug',
      iconColor: '#43A047', // rich green
      rank: 5,
      progressToNext: 30,
      pointsNeeded: 25
    },
    {
      category: 'Ideas',
      icon: 'fa fa-lightbulb-o',
      iconColor: '#7E57C2', // purple innovation
      rank: 6,
      progressToNext: 60,
      pointsNeeded: 35
    },
    {
      category: 'Pre-Fix',
      icon: 'fa fa-wrench',
      iconColor: '#EC407A', // hot pink
      rank: 1,
      progressToNext: 90,
      pointsNeeded: 15
    }
  ];

  goToLeaderboard(category: string) {
    this.router.navigate(['/leaderboard', category]);
  }


}
