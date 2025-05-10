import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
})
export class HeaderComponent {
  title = "Lakástextil shop";
  menuOpen = signal(false);

  constructor(private auth: Auth, private router: Router,private cartService: CartService) {}

  cartHasItems = false;

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartHasItems = items.length > 0;
    });
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/welcome']);
    } catch (error) {
      console.error('Hiba történt a kijelentkezés során:', error);
    }
  }
  
}