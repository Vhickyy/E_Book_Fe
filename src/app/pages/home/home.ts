import { Component } from '@angular/core';
import { Button } from '../../UI/button/button';
import { Nav } from '../../shared/nav/nav';
import { Book } from '../../components/book/book';
import { books } from '../../../data/books';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { CURVED_ARROW_SVG } from '../../../assets/svgs';
import { Svgs } from '../../components/svgs/svgs';

@Component({
  selector: 'app-home',
  imports: [Button, Nav, Book, RouterLink, Footer, Svgs],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  svg = CURVED_ARROW_SVG;
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

  topCategories = [
    {
      title: 'Romance',
      img: 'assets/dualbook.svg',
    },
    {
      title: 'Science',
      img: 'assets/secure.svg',
    },
    {
      title: 'Technology',
      img: 'assets/quality.svg',
    },
    {
      title: 'Kids',
      img: 'assets/quality.svg',
    },
    {
      title: 'Adventure',
      img: 'assets/quality.svg',
    },
    {
      title: 'Adventure',
      img: 'assets/quality.svg',
    },
  ];
}
