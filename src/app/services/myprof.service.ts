import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { UserData } from '../model/userData.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: Firestore) {}

  getUser(userId: string): Observable<UserData> {
    const userDocRef = doc(this.firestore, `users/${userId}`);
    return docData(userDocRef) as Observable<UserData>;
  }

  updateUser(user: UserData): Observable<void> {
    const userDocRef = doc(this.firestore, `users/${user.userId}`);
    return from(setDoc(userDocRef, user));
  }
}