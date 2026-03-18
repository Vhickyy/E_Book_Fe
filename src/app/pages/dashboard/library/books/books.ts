import { Component } from '@angular/core';
import { books } from '../../../../../data/books';
import { Button } from '../../../../UI/button/button';
import { RouterLink } from '@angular/router';
import { Book } from '../../../../components/book/book';

@Component({
  selector: 'app-books',
  imports: [Button, RouterLink, Book],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  books = books;
}
