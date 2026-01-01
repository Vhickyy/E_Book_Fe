import { Component } from '@angular/core';
import { Button } from '../../UI/button/button';
import { Nav } from '../../shared/nav/nav';
import { Book } from '../../components/book/book';
import { books } from '../../../data/books';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Button, Nav, Book, RouterLink, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  bookData = books;
  headerDetail = [
    {
      title: 'Large Collections',
      img: 'assets/dualbook.svg',
    },
    {
      title: 'Simple, Secure Payment',
      img: 'assets/secure.svg',
    },
    {
      title: 'Best Quality Materials',
      img: 'assets/quality.svg',
    },
  ];
}
