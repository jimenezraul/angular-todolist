import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openModal = false;

  onModalOpenOrClose() {
    this.openModal = !this.openModal
  }
}
