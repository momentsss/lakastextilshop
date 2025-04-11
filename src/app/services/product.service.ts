// app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../model/product-model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = [ 
    { image: 'product1.jpg', name: 'Puha párna', price: '4,990 Ft' },
    { image: 'product2.jpg', name: 'Színes függöny', price: '7,500 Ft' },
    { image: 'product3.jpg', name: 'Modern ágytakaró', price: '10,990 Ft' },
    { image: 'product4.jpg', name: 'Paplan', price: '9,999 Ft' },
    { image: 'product5.jpg', name: 'Párna huzat', price: '10,990 Ft' }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}