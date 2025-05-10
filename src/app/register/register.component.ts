import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  loading = false;

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {}

  async onSubmit() {
    if (this.userForm.valid) {
      this.loading = true;
      const { email, password, name } = this.userForm.value;
      try {
        const userCredential = await createUserWithEmailAndPassword(this.auth, email!, password!);

        // Létrehozzuk a `users` gyűjteményben a felhasználói adatokat
        const userId = userCredential.user.uid;
        const userDocRef = doc(this.firestore, `users/${userId}`);
        await setDoc(userDocRef, {
          userId,
          name,
          email
        });

        // Kijelentkeztetjük a felhasználót regisztráció után
        await signOut(this.auth);

        alert('Sikeres regisztráció! Jelentkezz be a folytatáshoz.');
        this.router.navigate(['/signin']);
      } catch (error) {
        console.error('Hiba történt a regisztráció során:', error);
        alert('Hiba történt a regisztráció során.');
      } finally {
        this.loading = false;
      }
    }
  }
}