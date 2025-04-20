import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-kudos-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kudos-history.component.html',
  styleUrl: './kudos-history.component.css',
  animations: [
    trigger('hoverEffect', [
      state('default', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.03)', boxShadow: '0 6px 18px rgba(0,0,0,0.15)' })),
      transition('default <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class KudosHistoryComponent {

  @Output() historyClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}
  state: 'default' | 'hovered' = 'default';

  onMouseEnter() {
    this.state = 'hovered';
  }

  onMouseLeave() {
    this.state = 'default';
  }

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

  triggerHistoryClick(): void {
    this.router.navigate(['/history']);
  }
}
