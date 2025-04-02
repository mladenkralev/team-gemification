import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
];
