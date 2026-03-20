import { Component, signal } from '@angular/core';
import { books } from '../../../../../data/books';
import { Button } from '../../../../UI/button/button';
import { RouterLink } from '@angular/router';
import { Book } from '../../../../components/book/book';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Pagination } from '../../../../components/pagination/pagination';

@Component({
  selector: 'app-books',
  imports: [Button, RouterLink, Book, MatPaginatorModule, Pagination],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  // books = [];
  data = signal<any[]>([]);
  totalItems = signal(books.length);

  pageIndex = signal(1);
  pageSize = signal(4);

  loadData(page: number, limit: number) {
    // this.api.getProducts(page, limit).subscribe((res: any) => {
    // });
    // this.data.set([]);
    // this.totalItems.set(0);
    this.data.set(books.slice((page - 1) * limit, page * limit));
    this.totalItems.set(books.length);
  }

  ngOnInit() {
    this.loadData(this.pageIndex(), this.pageSize());
  }
}
