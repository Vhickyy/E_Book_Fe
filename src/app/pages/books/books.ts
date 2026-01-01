import { Component, effect, signal } from '@angular/core';
import { GenHero } from '../../components/gen-hero/gen-hero';
import { books } from '../../../data/books';
import { Book } from '../../components/book/book';
import { CommonModule } from '@angular/common';
import { Select } from '../../reusable/select/select';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-books',
  imports: [GenHero, Book, CommonModule, Select, Footer],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  bookData = books;
  filter = '';
  filters = ['science', 'arts', 'anime', 'life', 'fun', 'romance'];
}
