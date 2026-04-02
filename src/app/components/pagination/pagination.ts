import { Component, computed, input, model } from '@angular/core';

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
  list = input.required<any[]>();

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
      this.manipulateList(this.pageIndex());
    }
  }

  prev() {
    if (this.pageIndex() > 1) {
      this.pageIndex.update((pre) => pre - 1);
      this.manipulateList(this.pageIndex());
    }
  }

  goToPage(page: number) {
    this.pageIndex.set(page);
    this.manipulateList(page);
  }

  manipulateList(page: number) {
    this.data.set(
      this.list().slice((page - 1) * this.pageSize(), page * this.pageSize()),
    );
  }
}
