import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth/register/register').then((m) => m.Register),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/auth/forgot-password/forgot-password').then(
            (m) => m.ForgotPassword,
          ),
      },
    ],
  },
  {
    path: 'books',
    loadComponent: () => import('./pages/books/books').then((m) => m.Books),
  },
  {
    path: 'books/:id',
    loadComponent: () =>
      import('./pages/book-id/book-id').then((m) => m.BookId),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./shared/dashbaord/dashboard-layout/dashboard-layout').then(
        (m) => m.DashboardLayout,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard/dashboard').then(
            (m) => m.Dashboard,
          ),
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./pages/dashboard/wishlist/wishlist').then((m) => m.Wishlist),
      },
      {
        path: 'library',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/dashboard/library/books/books').then(
                (m) => m.Books,
              ),
          },
          {
            path: 'reading',
            loadComponent: () =>
              import('./pages/dashboard/library/reading/reading').then(
                (m) => m.Reading,
              ),
          },
        ],
      },
    ],
  },
];
