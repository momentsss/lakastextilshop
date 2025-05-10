import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, MatButtonModule, CommonModule],
  template: `
    <div class="background">
      <div class="floating-shapes">
        <div *ngFor="let i of [1,2,3,4,5,6,7,8]" class="shape" [ngClass]="'shape-' + i"></div>
      </div>
      
      <div class="card">
        <div class="logo-container">
          <div class="logo">
            <span class="logo-icon">🏠</span>
          </div>
        </div>
        
        <h1>Üdvözlünk a <span class="highlight">Lakástextil</span> Shopban!</h1>
        <p>Fedezd fel minőségi textiljeink széles választékát otthonod felfrissítéséhez!</p>
        
        <div class="features">
          <div class="feature">
            <div class="feature-icon">✨</div>
            <div class="feature-text">Prémium minőség</div>
          </div>
          <div class="feature">
            <div class="feature-icon">🚚</div>
            <div class="feature-text">Gyors szállítás</div>
          </div>
          <div class="feature">
            <div class="feature-icon">💰</div>
            <div class="feature-text">Kedvező árak</div>
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
    </div>
  `,
  styles: [`
    /* Base styles */
    .background {
      background: linear-gradient(135deg, #7F7FD5, #86A8E7, #91EAE4);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 20px;
      animation: gradientFlow 15s ease infinite;
      background-size: 300% 300%;
    }
    
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    /* Floating shapes background */
    .floating-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      overflow: hidden;
    }
    
    .shape {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      animation: float 8s infinite ease-in-out;
    }
    
    .shape-1 {
      width: 80px;
      height: 80px;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    }
    
    .shape-2 {
      width: 120px;
      height: 120px;
      top: 60%;
      left: 15%;
      animation-delay: 1s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    }
    
    .shape-3 {
      width: 50px;
      height: 50px;
      top: 25%;
      left: 80%;
      animation-delay: 2s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.08));
    }
    
    .shape-4 {
      width: 100px;
      height: 100px;
      top: 70%;
      left: 75%;
      animation-delay: 3s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    }
    
    .shape-5 {
      width: 70px;
      height: 70px;
      top: 40%;
      left: 5%;
      animation-delay: 4s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03));
    }
    
    .shape-6 {
      width: 60px;
      height: 60px;
      top: 15%;
      left: 60%;
      animation-delay: 5s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    }
    
    .shape-7 {
      width: 110px;
      height: 110px;
      top: 75%;
      left: 30%;
      animation-delay: 6s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));
    }
    
    .shape-8 {
      width: 90px;
      height: 90px;
      top: 30%;
      left: 40%;
      animation-delay: 7s;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.06));
    }
    
    @keyframes float {
      0% { transform: translateY(0) translateX(0) rotate(0deg); }
      50% { transform: translateY(-20px) translateX(15px) rotate(8deg); }
      100% { transform: translateY(0) translateX(0) rotate(0deg); }
    }
    
    /* Card styles */
    .card {
      position: relative;
      background: rgba(255, 255, 255, 0.92);
      padding: 35px 30px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.08);
      text-align: center;
      max-width: 450px;
      width: 100%;
      z-index: 1;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      animation: cardAppear 1s ease-out forwards;
      overflow: hidden;
    }
    
    @keyframes cardAppear {
      0% { 
        opacity: 0; 
        transform: translateY(30px) scale(0.95);
      }
      100% { 
        opacity: 1; 
        transform: translateY(0) scale(1);
      }
    }
    
    /* Logo styles */
    .logo-container {
      margin-bottom: 25px;
      display: flex;
      justify-content: center;
    }
    
    .logo {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #6A5ACD, #9370DB);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(106, 90, 205, 0.3);
      animation: pulseLogo 2.5s infinite ease-in-out;
    }
    
    .logo-icon {
      font-size: 2.5rem;
      color: white;
    }
    
    @keyframes pulseLogo {
      0% { transform: scale(1); }
      50% { transform: scale(1.08); }
      100% { transform: scale(1); }
    }
    
    /* Text styles */
    h1 {
      font-size: 2.2rem;
      margin-bottom: 18px;
      color: #4A3882;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      line-height: 1.3;
    }
    
    .highlight {
      background: linear-gradient(to right, #6A5ACD, #9370DB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
    }
    
    p {
      font-size: 1.15rem;
      margin-bottom: 30px;
      color: #555;
      line-height: 1.5;
    }
    
    /* Features section */
    .features {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      border-bottom: 1px solid rgba(0, 0, 0, 0.07);
      padding: 20px 0;
    }
    
    .feature {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
    }
    
    .feature-icon {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }
    
    .feature-text {
      font-size: 0.9rem;
      color: #666;
      font-weight: 600;
    }
    
    /* Button styles */
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 25px;
    }
    
    button {
      font-size: 1.1rem;
      padding: 13px;
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      font-weight: 600;
      letter-spacing: 0.5px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .btn-content {
      z-index: 1;
      transition: all 0.3s ease;
    }
    
    .btn-icon {
      margin-left: 8px;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
    }
    
    button:hover .btn-icon {
      opacity: 1;
      transform: translateX(0);
    }
    
    .signin-btn {
      background: linear-gradient(to right, #6A5ACD, #9370DB);
      color: white;
      border: none;
    }
    
    .signin-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(106, 90, 205, 0.3);
      background: linear-gradient(to right, #5D4FC8, #8560D8);
    }
    
    .signup-btn {
      border: 2px solid #9370DB;
      color: #6A5ACD;
      background: transparent;
    }
    
    .signup-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(106, 90, 205, 0.15);
      background-color: rgba(106, 90, 205, 0.05);
    }
    
    /* Promotion badge */
    .promotion {
      position: relative;
      background: rgba(106, 90, 205, 0.08);
      border-radius: 10px;
      padding: 15px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .promo-badge {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: #FF6B6B;
      color: white;
      font-size: 0.8rem;
      font-weight: bold;
      padding: 5px 12px;
      border-radius: 20px;
      box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);
      animation: pulse 2s infinite ease-in-out;
    }
    
    .promo-text {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      color: #4A3882;
    }
    
    @keyframes pulse {
      0% { transform: translateX(-50%) scale(1); }
      50% { transform: translateX(-50%) scale(1.08); }
      100% { transform: translateX(-50%) scale(1); }
    }
    
    /* Media queries */
    @media (max-width: 480px) {
      .card {
        padding: 25px 20px;
      }
      
      h1 {
        font-size: 1.8rem;
      }
      
      p {
        font-size: 1rem;
        margin-bottom: 25px;
      }
      
      .logo {
        width: 70px;
        height: 70px;
      }
      
      .logo-icon {
        font-size: 2rem;
      }
      
      .features {
        flex-direction: column;
        gap: 15px;
      }
      
      .feature {
        flex-direction: row;
        justify-content: center;
        gap: 10px;
      }
      
      .feature-icon {
        margin-bottom: 0;
        font-size: 1.5rem;
      }
    }
  `]
})
export class WelcomeComponent {
  constructor() {}
}