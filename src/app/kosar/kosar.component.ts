import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../services/cart.service';
import { Product } from '../model/product-model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule,RouterModule],
})
export class KosarComponent {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  async purchase(): Promise<void> {
    if (this.cartItems.length === 0) {
      alert('A kosár üres. Nem lehet rendelést leadni.');
      return;
    }

    try {
      await this.cartService.purchaseItems();
      alert('Rendelés sikeresen leadva!');
      this.router.navigate(['/myprof']);
    } catch (error) {
      console.error('Hiba történt a rendelés leadása során:', error);
      alert('Hiba történt a rendelés leadása során. Kérjük, próbálja újra.');
    }
  }
}