import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Books } from './pages/books/books';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { Cart } from './pages/cart/cart';
import { BookId } from './pages/book-id/book-id';

export const routes: Routes = [
  {
    path: '',
    component: Home,
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
    path: 'about',
    component: Home,
  },
  {
    path: 'journal',
    component: Cart,
  },
  {
    path: 'cart',
    component: Cart,
  },
];
