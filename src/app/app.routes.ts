import { Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', 
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.component').then((m) => m.WelcomeComponent),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./signin/signin.component').then((m) => m.SigninComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent), 
    canActivate: [AuthGuard], 
  },
  {
    path: 'myprof',
    loadComponent: () =>
      import('./myprof/myprof.component').then((m) => m.MyProfComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'kosar',
    loadComponent: () =>
      import('./kosar/kosar.component').then((m) => m.KosarComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'termekek',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'delete-product',
    loadComponent: () =>
      import('./delete-product/delete-product.component').then(
        (m) => m.DeleteProductComponent
      ),
    canActivate: [AuthGuard],
  },
];