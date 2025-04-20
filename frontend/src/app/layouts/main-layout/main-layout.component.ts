import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {TopbarComponent} from "../../components/topbar/topbar.component";
import {ProgressCardComponent} from "../../components/progress-card/progress-card.component";
import {KudosHistoryComponent} from "../../components/kudos-history/kudos-history.component";
import {KudosAvailableComponent} from "../../components/kudos-available/kudos-available.component";
import {GlobalLeaderboardComponent} from "../../components/global-leaderboard/global-leaderboard.component";
import {GiveKudosComponent} from "../../components/give-kudos/give-kudos.component";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    TopbarComponent,
    ProgressCardComponent,
    KudosHistoryComponent,
    KudosAvailableComponent,
    GlobalLeaderboardComponent,
    GiveKudosComponent,
    RouterModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(private router: Router) {}

}
