import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth-page',
    loadComponent: () => import('./pages/auth-page/auth-page.page').then( m => m.AuthPagePage)
  },
  {
    path: 'user-list',
    loadComponent: () => import('./pages/user-list/user-list.page').then( m => m.UserListPage)
  },
  {
    path: '',
    redirectTo: 'auth-page',
    pathMatch: 'full',
  },
];
