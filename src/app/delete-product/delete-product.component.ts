import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class DeleteProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {} 

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productService.getProducts();
      console.log('Lekérdezett termékek:', this.products);
    } catch (error) {
      console.error('Hiba történt a termékek lekérdezése során:', error);
    }
  }

  // Termék törlés
  async deleteProduct(productId: string): Promise<void> {
    if (!productId) {
      console.error('Termék ID nem található');
      return;
    }
    try {
      await this.productService.deleteProduct(productId);
      this.products = this.products.filter((product) => product.id !== productId);
      alert('Termék sikeresen törölve!');
    } catch (error) {
      console.error('Hiba történt a termék törlése során:', error);
    }
  }

  // Vissza a főoldalra
  goBack(): void {
    this.router.navigate(['/home']); // Navigálás a főoldalra
  }
}