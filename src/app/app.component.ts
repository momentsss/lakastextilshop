import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header *ngIf="isLoggedIn"></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
    main {
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    `
  ],
})
export class AppComponent implements OnDestroy {
  isLoggedIn = false;

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      this.isLoggedIn = !!user;
    });

    window.onbeforeunload = () => {
      if (this.isLoggedIn) {
        signOut(this.auth).catch((error) => console.error('Kijelentkezési hiba:', error));
      }
    };
  }

  ngOnDestroy(): void {
    window.onbeforeunload = null; 
  }
}