import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product-model';
import { collection, deleteDoc, doc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();
  private inTransitItems = new BehaviorSubject<Product[]>([]);
  inTransitItems$ = this.inTransitItems.asObservable();

  constructor(private firestore: Firestore) {}


  addToCart(product: Product): void {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, product]);
  }

  removeFromCart(productId: string): void {
    const updatedItems = this.cartItems.value.filter((item) => item.id !== productId);
    this.cartItems.next(updatedItems);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => total + item.price, 0);
  }
  
  async purchaseItems(): Promise<void> {
    const currentItems = this.cartItems.value;
    const productCollection = collection(this.firestore, 'products');

    for (const item of currentItems) {
      const productDoc = doc(this.firestore, 'products', item.id);
      await deleteDoc(productDoc); 
    }

    
    const inTransit = [...this.inTransitItems.value, ...currentItems];
    this.inTransitItems.next(inTransit);

    this.clearCart();
  }

  getInTransitItems(): Product[] {
    return this.inTransitItems.value;
  }
}