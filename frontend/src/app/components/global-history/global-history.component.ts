import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-global-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-history.component.html',
  styleUrl: './global-history.component.css'
})
export class GlobalHistoryComponent {

  history = [
    {
      from: 'Mladen',
      to: 'Valentin',
      points: 1,
      date: '2025-04-07'
    },
    {
      from: 'Galin',
      to: 'Georgi',
      points: 2,
      date: '2025-04-05'
    },
    {
      from: 'Nikola',
      to: 'Diyana',
      points: 1,
      date: '2025-04-03'
    }
  ];

}
