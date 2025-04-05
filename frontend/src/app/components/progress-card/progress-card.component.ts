import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-card',
  standalone: true,
  imports: [],
  templateUrl: './progress-card.component.html',
  styleUrl: './progress-card.component.css'
})

export class ProgressCardComponent {
  @Input() icon = '';
  @Input() iconColor = '';
  @Input() rank = 0;
  @Input() category = '';
  @Input() progressToNext = 0;
  @Input() pointsNeeded = 0;
}
