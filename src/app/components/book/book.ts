import { Component, input } from '@angular/core';
import { IBook } from '../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [RouterLink],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  book = input.required<IBook>();
}
