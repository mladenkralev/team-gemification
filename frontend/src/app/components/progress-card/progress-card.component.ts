import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-progress-card',
  standalone: true,
  imports: [],
  templateUrl: './progress-card.component.html',
  styleUrl: './progress-card.component.css',
  animations: [
    trigger('hoverEffect', [
      state('default', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.03)', boxShadow: '0 6px 18px rgba(0,0,0,0.15)' })),
      transition('default <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})

export class ProgressCardComponent {
  @Input() icon = '';
  @Input() iconColor = '';
  @Input() rank = 0;
  @Input() category = '';
  @Input() progressToNext = 0;
  @Input() pointsNeeded = 0;

  @Output() cardClick = new EventEmitter<string>();


  state: 'default' | 'hovered' = 'default';

  onMouseEnter() {
    this.state = 'hovered';
  }

  onMouseLeave() {
    this.state = 'default';
  }


  triggerCardClick() {
    this.cardClick.emit(this.category);
  }
}
