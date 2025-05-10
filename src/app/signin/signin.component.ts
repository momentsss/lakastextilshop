import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });

    setPersistence(this.auth, browserSessionPersistence).catch((error) => {
      console.error('Hiba történt a munkamenet-alapú hitelesítés beállítása során:', error);
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        await signInWithEmailAndPassword(this.auth, email!, password!);
        alert('Sikeres bejelentkezés!');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Hiba történt a bejelentkezés során:', error);
        alert('Hiba történt a bejelentkezés során.');
      }
    }
  }

  async onSignOut() {
    try {
      await signOut(this.auth);
      alert('Sikeres kijelentkezés!');
      this.router.navigate(['/signin']);
    } catch (error) {
      console.error('Hiba történt a kijelentkezés során:', error);
      alert('Hiba történt a kijelentkezés során.');
    }
  }
}