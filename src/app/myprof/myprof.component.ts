import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '@angular/fire/auth';
import { UserService } from '../services/myprof.service';
import { UserData } from '../model/userData.model';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { Subscription } from 'rxjs';
import { Product } from '../model/product-model';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-myprof',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './myprof.component.html',
  styleUrls: ['./myprof.component.scss']
})
export class MyProfComponent implements OnInit,OnDestroy {
  userProfile!: UserData | null;
  profileForm!: FormGroup;
  isEditing = false;
  private subscription!: Subscription;
  inTransitItems: Product[] = [];


  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private userService: UserService,
    private router: Router,
    private cartService: CartService
  ) {
    this.inTransitItems = this.cartService.getInTransitItems();

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  

  ngOnInit(): void {
    const userId = this.auth.currentUser?.uid || '';
    if (!userId) {
      this.router.navigate(['/signin']);
      return;
    }
    this.loadUser(userId);
  }

  loadUser(userId: string): void {
    this.subscription = this.userService.getUser(userId).subscribe((data) => {
      if (!data) {
        console.error('A felhasználói adatok nem találhatók a Firestore-ban.');
        return;
      }

      this.userProfile = data;

      this.profileForm = this.fb.group({
        name: [this.userProfile.name, [Validators.required, Validators.minLength(3)]]
      });
    }, (error) => {
      console.error('Hiba történt a felhasználói adatok betöltése során:', error);
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

    saveProfile(): void {
    if (this.profileForm.valid && this.userProfile) {
      const updatedUser: UserData = {
        ...this.userProfile,
        name: this.profileForm.value.name
      };

      this.userService.updateUser(updatedUser).subscribe(() => {
        this.userProfile = updatedUser;
        this.isEditing = false;
        alert('Profil sikeresen frissítve!');
      });
    }
  }
}
