import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';

import { UserData } from '../model/userData.model';

@Component({
  selector: 'app-myprof',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule
  ],
  templateUrl: './myprof.component.html',
  styleUrls: ['./myprof.component.scss']
})
export class MyProfComponent implements OnInit {
onCountryChange() {
throw new Error('Method not implemented.');
}
  user!: UserData; 
  profileForm!: FormGroup;
  isEditing = false;

  countries = ['Magyarország', 'Románia', 'Szlovákia', 'Ausztria']; 
showBlur: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadUser(); 
  }

  loadUser(): void {
    this.user = {
      userId: 'abc123',
      name: 'Teszt Elek',
      mobile: 123456789,
      country: 'Magyarország',
      postNumber: 1234,
      city: 'Szeged',
      address: 'Teszt utca 5.'
    };

    this.profileForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(3)]],
      mobile: [this.user.mobile, [Validators.required, Validators.pattern('^[0-9]+$')]],
      country: [this.user.country, Validators.required],
      postNumber: [this.user.postNumber, [Validators.required, Validators.pattern('^[0-9]+$')]],
      city: [this.user.city, Validators.required],
      address: [this.user.address, Validators.required],
      newsletter: [false]
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      const updatedUser: UserData = {
        ...this.user,
        ...this.profileForm.value,
      };
      console.log('Mentett adatok:', updatedUser);
      this.user = updatedUser;
      this.toggleEdit();
    }
  }
}
