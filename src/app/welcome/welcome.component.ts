import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, MatButtonModule, CommonModule],
  template: `
    <div class="welcome-container">
      <div class="background-elements">
        <div *ngFor="let i of [1,2,3,4,5,6,7,8,9,10]" class="shape" [ngClass]="'shape-' + i"></div>
      </div>
      
      <header class="main-header">
        <div class="logo">
          <span class="logo-icon">🏠</span>
          <span class="logo-text">Lakástextil shop</span>
        </div>
      </header>
      
      <main class="main-content">
        <section class="hero-section">
          <div class="hero-content">
            <h1 class="main-title">Kényelem és stílus <span class="highlight">otthonodban</span></h1>
            <p class="subtitle">Fedezd fel prémium minőségű lakástextiljeinket és változtasd otthonod meleg, barátságos térré!</p>
            
            <div class="hero-features">
              <div class="feature">
                <div class="feature-icon">✨</div>
                <div class="feature-text">Kiváló anyagok</div>
              </div>
              <div class="feature">
                <div class="feature-icon">🚚</div>
                <div class="feature-text">Ingyenes szállítás</div>
              </div>
              <div class="feature">
                <div class="feature-icon">💰</div>
                <div class="feature-text">Kedvező árak</div>
              </div>
              <div class="feature">
                <div class="feature-icon">🔄</div>
                <div class="feature-text">14 napos csere</div>
              </div>
            </div>
            
            <div class="buttons">
              <button mat-raised-button color="primary" routerLink="/signin" class="signin-btn">
                <span class="btn-content">Bejelentkezés</span>
                <span class="btn-icon">→</span>
              </button>
              <button mat-stroked-button color="accent" routerLink="/register" class="signup-btn">
                <span class="btn-content">Regisztráció</span>
                <span class="btn-icon">+</span>
              </button>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="image-container">
              <div class="floating-product p1"></div>
              <div class="floating-product p2"></div>
              <div class="floating-product p3"></div>
            </div>
          </div>
        </section>
        
        <section class="categories-preview">
          <div class="category-item">
            <div class="category-icon">🛏️</div>
            <div class="category-name">Ágynemű</div>
          </div>
          <div class="category-item">
            <div class="category-icon">🪟</div>
            <div class="category-name">Függöny</div>
          </div>
          <div class="category-item">
            <div class="category-icon">🛋️</div>
            <div class="category-name">Díszpárna</div>
          </div>
          <div class="category-item">
            <div class="category-icon">🧶</div>
            <div class="category-name">Takaró</div>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .welcome-container {
      min-height: 100vh;
      width: 100%;
      position: relative;
      overflow-x: hidden;
      background: linear-gradient(135deg, #f5f7fa, #e4e8f0);
      font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }
    
    .background-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }
    
    .shape {
      position: absolute;
      border-radius: 50%;
      animation: float 20s infinite ease-in-out;
    }
    
    @keyframes float {
      0% { transform: translateY(0) translateX(0) rotate(0deg); }
      33% { transform: translateY(-30px) translateX(20px) rotate(5deg); }
      66% { transform: translateY(20px) translateX(-15px) rotate(-3deg); }
      100% { transform: translateY(0) translateX(0) rotate(0deg); }
    }
    
    .shape-1 {
      width: 350px;
      height: 350px;
      top: -150px;
      left: -100px;
      animation-delay: 0s;
      background: radial-gradient(circle at 30% 30%, rgba(147, 112, 219, 0.3), rgba(147, 112, 219, 0.05));
      filter: blur(30px);
    }
    
    .shape-2 {
      width: 400px;
      height: 400px;
      bottom: -200px;
      right: -150px;
      animation-delay: 5s;
      background: radial-gradient(circle at 30% 30%, rgba(106, 90, 205, 0.25), rgba(106, 90, 205, 0.05));
      filter: blur(40px);
    }
    
    .shape-3 {
      width: 200px;
      height: 200px;
      top: 30%;
      left: 15%;
      animation-delay: 2s;
      background: radial-gradient(circle at 30% 30%, rgba(147, 112, 219, 0.2), rgba(147, 112, 219, 0.05));
      filter: blur(20px);
    }
    
    .shape-4 {
      width: 250px;
      height: 250px;
      bottom: 20%;
      right: 25%;
      animation-delay: 7s;
      background: radial-gradient(circle at 30% 30%, rgba(106, 90, 205, 0.15), rgba(106, 90, 205, 0.05));
      filter: blur(25px);
    }
    
    .shape-5 {
      width: 180px;
      height: 180px;
      top: 60%;
      left: 5%;
      animation-delay: 10s;
      background: radial-gradient(circle at 30% 30%, rgba(147, 112, 219, 0.15), rgba(147, 112, 219, 0.03));
      filter: blur(15px);
    }
    
    .shape-6, .shape-7, .shape-8, .shape-9, .shape-10 {
      width: 150px;
      height: 150px;
      filter: blur(20px);
      background: radial-gradient(circle at 30% 30%, rgba(147, 112, 219, 0.1), rgba(147, 112, 219, 0.02));
    }
    
    .shape-6 {
      top: 10%;
      right: 25%;
      animation-delay: 3s;
    }
    
    .shape-7 {
      bottom: 15%;
      left: 30%;
      animation-delay: 8s;
    }
    
    .shape-8 {
      top: 40%;
      right: 5%;
      animation-delay: 6s;
    }
    
    .shape-9 {
      top: 25%;
      left: 40%;
      animation-delay: 12s;
    }
    
    .shape-10 {
      bottom: 35%;
      right: 10%;
      animation-delay: 9s;
    }
    
    
    .main-header {
      display: flex;
      justify-content: center; 
      align-items: center;
      padding: 1rem;
      position: relative;
      z-index: 10;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .logo-icon {
      font-size: 1.5rem;
      background: linear-gradient(135deg, #6A5ACD, #9370DB);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(106, 90, 205, 0.3);
    }
    
    .logo-text {
      font-size: 1.2rem;
      font-weight: 700;
      color: #4A3882;
      letter-spacing: 0.5px;
    }
    
    .main-content {
      position: relative;
      z-index: 5;
      padding: 0 1rem;
    }
    
    .hero-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
      min-height: calc(100vh - 150px);
      padding-top: 1rem;
    }
    
    .hero-content {
      width: 100%;
    }
    
    .main-title {
      font-size: 2rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: #4A3882;
      font-weight: 800;
    }
    
    .highlight {
      background: linear-gradient(to right, #6A5ACD, #9370DB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .subtitle {
      font-size: 1rem;
      color: #555;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
    
    .hero-features {
      display: flex;
      flex-direction: column; 
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    .feature {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.7);
      padding: 0.75rem 1rem;
      border-radius: 50px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(10px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      width: 100%;
      max-width: 300px;
    }
    
    .feature:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
    }
    
    .feature-icon {
      font-size: 1.25rem;
    }
    
    .feature-text {
      font-size: 0.9rem;
      font-weight: 600;
      color: #4A3882;
    }
    
    .buttons {
      display: flex;
      flex-direction: column; 
      gap: 0.75rem;
      width: 100%;
      align-items: center;
    }
    
    button {
      font-size: 0.95rem;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      transition: all 0.3s ease;
      font-weight: 600;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      max-width: 300px;
    }
    
    .btn-icon {
      transition: transform 0.3s ease;
    }
    
    button:hover .btn-icon {
      transform: translateX(3px);
    }
    
    .signin-btn {
      background: linear-gradient(to right, #6A5ACD, #9370DB);
      color: white;
      border: none;
      box-shadow: 0 6px 15px rgba(106, 90, 205, 0.3);
    }
    
    .signin-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(106, 90, 205, 0.4);
    }
    
    .signup-btn {
      border: 2px solid #9370DB;
      color: #6A5ACD;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
    }
    
    .signup-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(106, 90, 205, 0.15);
      background: rgba(255, 255, 255, 0.9);
    }
    
    .hero-image {
      width: 100%;
      height: 250px; 
      margin-top: 1rem;
    }
    
    .image-container {
      width: 100%;
      height: 100%;
      position: relative;
    }
    
    .floating-product {
      position: absolute;
      border-radius: 12px;
      background-color: #fff;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transform: scale(0.7);
    }
    
    .p1 {
      width: 180px;
      height: 220px;
      left: 5%;
      top: 20%;
      background: linear-gradient(to bottom, #f8f8f8, #e0e0e0);
      animation: float-product 8s infinite ease-in-out;
      z-index: 3;
      transform: rotate(-5deg) scale(0.7);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    
    .p2 {
      width: 160px;
      height: 200px;
      left: 30%;
      top: 5%;
      background: linear-gradient(to bottom, #f0f0f0, #d8d8d8);
      animation: float-product 8s infinite ease-in-out 2s;
      z-index: 2;
      transform: rotate(8deg) scale(0.7);
    }
    
    .p3 {
      width: 180px;
      height: 230px;
      left: 50%;
      top: 25%;
      background: linear-gradient(to bottom, #f5f5f5, #e8e8e8);
      animation: float-product 8s infinite ease-in-out 4s;
      z-index: 1;
      transform: rotate(-2deg) scale(0.7);
    }
    
    @keyframes float-product {
      0% { transform: translateY(0px) rotate(0deg) scale(0.7); }
      50% { transform: translateY(-15px) rotate(3deg) scale(0.7); }
      100% { transform: translateY(0px) rotate(0deg) scale(0.7); }
    }
    
    .categories-preview {
      display: grid;
      grid-template-columns: repeat(2, 1fr); 
      gap: 0.75rem;
      margin: 1.5rem 0 3rem;
    }
    
    .category-item {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    
    .category-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
      background: rgba(255, 255, 255, 0.9);
    }
    
    .category-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    .category-name {
      font-weight: 600;
      color: #4A3882;
      font-size: 0.9rem;
    }
    
    @media (min-width: 600px) {
      .main-header {
        padding: 1.25rem 2rem;
        justify-content: space-between;
      }
      
      .main-content {
        padding: 0 2rem;
      }
      
      .main-title {
        font-size: 2.5rem;
      }
      
      .subtitle {
        font-size: 1.1rem;
      }
      
      .hero-features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
      }
      
      .buttons {
        flex-direction: row;
        justify-content: center;
      }
      
      button {
        width: auto;
      }
      
      .hero-image {
        height: 300px;
      }
      
      .floating-product {
        transform: scale(0.8);
      }
      
      .p1 {
        transform: rotate(-5deg) scale(0.8);
      }
      
      .p2 {
        transform: rotate(8deg) scale(0.8);
      }
      
      .p3 {
        transform: rotate(-2deg) scale(0.8);
      }
      
      @keyframes float-product {
        0% { transform: translateY(0px) rotate(0deg) scale(0.8); }
        50% { transform: translateY(-15px) rotate(3deg) scale(0.8); }
        100% { transform: translateY(0px) rotate(0deg) scale(0.8); }
      }
    }
    
    /* Desktop styles */
    @media (min-width: 900px) {
      .main-header {
        padding: 1.5rem 4rem;
      }
      
      .main-content {
        padding: 0 4rem;
      }
      
      .hero-section {
        flex-direction: row;
        text-align: left;
        align-items: center;
        min-height: calc(100vh - 200px);
      }
      
      .hero-content {
        flex: 1;
        max-width: 650px;
      }
      
      .main-title {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
      }
      
      .subtitle {
        font-size: 1.25rem;
        margin-bottom: 2.5rem;
      }
      
      .hero-features {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1.5rem;
        margin-bottom: 2.5rem;
      }
      
      .feature {
        width: auto;
      }
      
      .buttons {
        justify-content: flex-start;
      }
      
      .hero-image {
        flex: 1;
        height: 500px;
      }
      
      .floating-product {
        transform: scale(1);
      }
      
      .p1 {
        width: 220px;
        height: 280px;
        left: 10%;
        top: 20%;
        transform: rotate(-5deg);
      }
      
      .p2 {
        width: 190px;
        height: 250px;
        left: 25%;
        top: 5%;
        transform: rotate(8deg);
      }
      
      .p3 {
        width: 240px;
        height: 300px;
        left: 40%;
        top: 30%;
        transform: rotate(-2deg);
      }
      
      @keyframes float-product {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(3deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }
      
      .categories-preview {
        display: flex;
        grid-template-columns: none;
        justify-content: space-between;
        margin: 2rem 0 4rem;
        gap: 1.5rem;
      }
      
      .category-item {
        flex: 1;
        padding: 1.5rem;
      }
      
      .category-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      .category-name {
        font-size: 1rem;
      }
    }
    
    @media (min-width: 1200px) {
      .main-title {
        font-size: 3.5rem;
      }
    }
  `]
})
export class WelcomeComponent {
  constructor() {}
}