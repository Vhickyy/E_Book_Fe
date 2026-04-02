import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Books } from './pages/books/books';
import { Books as LibBook } from './pages/dashboard/library/books/books';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { Cart } from './pages/cart/cart';
import { BookId } from './pages/book-id/book-id';
import { About } from './pages/about/about';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { DashboardLayout } from './shared/dashbaord/dashboard-layout/dashboard-layout';
import { Wishlist } from './pages/dashboard/wishlist/wishlist';
import { Reading } from './pages/dashboard/library/reading/reading';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      },
      {
        path: 'forgot-password',
        component: ForgotPassword,
      },
    ],
  },
  {
    path: 'books',
    component: Books,
  },
  {
    path: 'books/:id',
    component: BookId,
  },

  {
    path: 'journal',
    component: Cart,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'wishlist',
        component: Wishlist,
      },
      {
        path: 'library',
        children: [
          {
            path: '',
            component: LibBook,
          },
          {
            path: 'reading',
            component: Reading,
          },
        ],
      },
    ],
  },
];
