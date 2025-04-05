import {Component} from '@angular/core';
import {SidebarComponent} from "../components/sidebar/sidebar.component";
import {TopbarComponent} from "../components/topbar/topbar.component";
import {ProgressCardComponent} from "../components/progress-card/progress-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    TopbarComponent,
    ProgressCardComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cardItems = [
    {
      category: 'Team Leading',
      icon: 'fa fa-users',
      iconColor: 'text-primary',
      rank: 8,
      progressToNext: 65,
      pointsNeeded: 45
    },
    {
      category: 'Code Reviews',
      icon: 'fa fa-code',
      iconColor: 'text-success',
      rank: 3,
      progressToNext: 20,
      pointsNeeded: 15
    },
    {
      category: 'Code Reviews',
      icon: 'fa fa-shower',
      iconColor: 'text-success',
      rank: 3,
      progressToNext: 20,
      pointsNeeded: 15
    }
  ];

}
