import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service'; 
import { MenuComponent } from "../shared/menu/menu.component";
import { AddProductComponent } from "../add-product/add-product.component";
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MenuComponent, AddProductComponent, ProductCardComponent, CommonModule]
})
export class HomeComponent implements OnInit {
  page = '';
  products: any[] = []; 

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts(); 
    console.log(this.products); 
  }

  changePage(selectedPage: string) {
    console.log('Navigálás ide:', selectedPage);
    if (selectedPage === 'add-product') {
      this.router.navigate(['/add-product']);
    }
  }
}
