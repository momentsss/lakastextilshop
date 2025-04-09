import { Routes } from '@angular/router';


export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent:() => {
        return import('./home/home.component').then((m) =>m.HomeComponent)
    },
},
{
    path:'myprof',
    loadComponent: () => {
        return import('./myprof/myprof.component').then((m) =>m.MyProfComponent)
    },
},
{
    path:'signin',
    loadComponent: () => {
        return import('./signin/signin.component').then((m) =>m.SigninComponent)
    },
},
{
    path:'register',
    loadComponent: () => {
        return import('./register/register.component').then((m) =>m.RegisterComponent)
    },
},
{
    path:'kosar',
    loadComponent: () => {
        return import('./kosar/kosar.component').then((m) =>m.KosarComponent)
    },
},

{
    path:'add-product',
    loadComponent: () => {
        return import('./add-product/add-product.component').then((m) =>m.AddProductComponent)
    },
},

];
