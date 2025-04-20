import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LeaderboardComponent} from "./components/leaderboard/leaderboard.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {GlobalHistoryComponent} from "./components/global-history/global-history.component";
import {GlobalLeaderboardComponent} from "./components/global-leaderboard/global-leaderboard.component";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'leaderboard/:category', component: GlobalLeaderboardComponent },
      { path: 'history', component: GlobalHistoryComponent }
    ]
  }
];
