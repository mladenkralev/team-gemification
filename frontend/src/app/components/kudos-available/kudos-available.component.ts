import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-kudos-available',
  standalone: true,
  imports: [],
  templateUrl: './kudos-available.component.html',
  styleUrl: './kudos-available.component.css'
})
export class KudosAvailableComponent {
  @Input() availablePoints = 0;
}
