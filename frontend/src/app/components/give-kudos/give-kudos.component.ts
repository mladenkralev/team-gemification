import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-give-kudos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './give-kudos.component.html',
  styleUrl: './give-kudos.component.css',
  animations: [
    trigger('buttonPulse', [
      state('default', style({ transform: 'scale(1)' })),
      state('active', style({ transform: 'scale(1.05)' })),
      transition('default => active', animate('150ms ease-out')),
      transition('active => default', animate('150ms ease-in')),
    ])
  ]
})
export class GiveKudosComponent {
  users = ['Jess', 'Alex', 'Taylor', 'Mira'];
  categories = ['Team Leading', 'Code Reviews', 'Bug Fixing'];

  selectedUser = '';
  selectedCategory = '';
  message = '';

  successMessage = '';

  state = 'default';

  kudosLeft = 2; // or get from backend / shared state

  giveKudos() {
    if (!this.selectedUser || !this.selectedCategory || this.kudosLeft <= 0) return;

    this.kudosLeft--;

    this.successMessage = `👏 Kudos given to ${this.selectedUser} for ${this.selectedCategory}!`;

    // Clear form
    this.selectedUser = '';
    this.selectedCategory = '';
    this.message = '';

    // Animate the button
    this.state = 'active';
    setTimeout(() => this.state = 'default', 300);

    // Auto-hide success message
    setTimeout(() => this.successMessage = '', 3000);

    // 🎉 Launch confetti
    this.launchConfetti();
  }

  launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
