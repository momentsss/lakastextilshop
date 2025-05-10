import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Product } from '../model/product-model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      size: ['', [Validators.required, Validators.pattern(/^\d+$/)]],

    });
  }

  calculateCompletionPercentage(): number {
    if (!this.productForm) return 0;

    const totalFields = Object.keys(this.productForm.controls).length;
    if (totalFields === 0) return 0;

    let filledFields = 0;

    Object.keys(this.productForm.controls).forEach((key) => {
      const control = this.productForm.get(key);
      if (control && control.value) {
        const value = control.value;

        if (typeof value === 'string' && value.trim() !== '') {
          filledFields++;
        } else if (typeof value === 'number') {
          filledFields++;
        }
      }
    });

    return Math.round((filledFields / totalFields) * 100);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
  
      if (product.size && /^\d+$/.test(product.size)) {
        const size = product.size;
        const formattedSize = `${size.slice(0, size.length / 2)}x${size.slice(size.length / 2)}`;
        product.size = formattedSize;
      }
  
      this.productService.addProduct(product).then(() => {
        alert('Termék sikeresen hozzáadva!');
        this.productForm.reset();
      }).catch((error) => {
        console.error('Hiba történt a termék hozzáadása során:', error);
        alert('Hiba történt a termék hozzáadása során.');
      });
    } else {
      alert('Kérjük, töltsd ki az összes mezőt!');
    }
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}