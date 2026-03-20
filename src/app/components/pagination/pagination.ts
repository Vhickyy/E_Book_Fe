import { Component, computed, model } from '@angular/core';
import { books } from '../../../data/books';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  pageIndex = model.required<number>();
  pageSize = model.required<number>();
  totalItems = model.required<number>();
  data = model.required<any[]>();

  totalPages = computed(() => Math.ceil(this.totalItems() / this.pageSize()));
  pages = computed(() => {
    const total = this.totalPages();
    const current = this.pageIndex();

    const windowSize = 3; // how many buttons you want visible
    const half = Math.floor(windowSize / 2);

    let start = Math.max(1, current - half);
    let end = Math.min(total, current + half);

    // adjust when near edges
    if (current <= half) {
      end = Math.min(total, windowSize);
    }

    if (current + half >= total) {
      start = Math.max(1, total - windowSize + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  next() {
    if (this.pageIndex() < this.totalPages()) {
      this.pageIndex.update((pre) => pre + 1);
      this.data.set(
        books.slice(
          (this.pageIndex() - 1) * this.pageSize(),
          this.pageIndex() * this.pageSize(),
        ),
      );
    }
  }

  prev() {
    if (this.pageIndex() > 1) {
      this.data.set(
        books.slice(
          (this.pageIndex() - 2) * this.pageSize(),
          this.pageIndex() * this.pageSize(),
        ),
      );
      this.pageIndex.update((pre) => pre - 1);
    }
  }

  goToPage(page: number) {
    this.pageIndex.set(page);
    this.data.set(
      books.slice((page - 1) * this.pageSize(), page * this.pageSize()),
    );
  }

  // ngOnInit() {
  //   console.log(this.pages(), this.totalPages());
  //   console.log(this.pageIndex());
  // }
}
