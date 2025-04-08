import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-kudos-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kudos-history.component.html',
  styleUrl: './kudos-history.component.css'
})
export class KudosHistoryComponent {
  history = [
    {
      from: 'Alex',
      to: 'Jess',
      points: 1,
      date: '2025-04-07'
    },
    {
      from: 'Taylor',
      to: 'Sam',
      points: 2,
      date: '2025-04-05'
    },
    {
      from: 'Mira',
      to: 'Alex',
      points: 1,
      date: '2025-04-03'
    }
  ];
}
