import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from '@angular/fire/firestore';
import { Product } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private collectionName = 'products';

  constructor(private firestore: Firestore) {}

  async getProductsOrderedByPriceDesc(): Promise<Product[]> {
    const productCollection = collection(this.firestore, this.collectionName);
    const q = query(productCollection, orderBy('price', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Product));
  }

  async addProduct(product: Product): Promise<void> {
    const productCollection = collection(this.firestore, this.collectionName);
    await addDoc(productCollection, product);
    console.log('Termék sikeresen hozzáadva:', product);
  }

  async getProducts(): Promise<Product[]> {
    const productCollection = collection(this.firestore, this.collectionName);
    const snapshot = await getDocs(productCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    } as Product));
  }

  async deleteProduct(productId: string): Promise<void> {
    const productDoc = doc(this.firestore, this.collectionName, productId);
    await deleteDoc(productDoc);
    console.log('Termék sikeresen törölve:', productId);
  }

  
}
