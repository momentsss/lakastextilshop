import { Injectable } from '@angular/core';
import { UserData } from '../model/userData.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): UserData {
    return {
      userId: 'abc123',
      name: 'Teszt Elek',
      mobile: 123456789,
      country: 'Magyarország',
      postNumber: 1234,
      city: 'Szeged',
      address: 'Teszt utca 5.'
    };
  }

  updateUser(user: UserData): void {
    console.log('Mentett adatok:', user);
  }
}
