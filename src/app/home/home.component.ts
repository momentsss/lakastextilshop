import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from "../shared/menu/menu.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MenuComponent]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productService.getProductsOrderedByPriceDesc();

      this.cartService.cartItems$.subscribe((cartItems) => {
        this.totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
      });
    } catch (error) {
      console.error('Hiba történt a termékek lekérdezése során:', error);
    }
  }

  addToCart(product: Product): void {
    if (product.size && /^\d+$/.test(product.size)) {
      const size = product.size;
      const formattedSize = `${size.slice(0, size.length / 2)}x${size.slice(size.length / 2)}`;
      product.size = formattedSize;
    }
  
    this.cartService.addToCart(product);
    this.products = this.products.filter((p) => p.id !== product.id);
  }

  changePage(selectedPage: string): void {
    this.router.navigate([`/${selectedPage}`]);
  }
}