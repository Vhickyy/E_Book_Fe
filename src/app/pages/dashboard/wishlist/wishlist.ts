import { Component, TemplateRef, ViewChild } from '@angular/core';
import { WishTable } from '../../../reusable/wish-table/wish-table';

@Component({
  selector: 'app-wishlist',
  imports: [WishTable],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  dataSource = [
    {
      image: '/assets/book.png',
      name: 'Laptop',
      price: 1200,
      dateAdded: '2026-03-14',
      stock: 'In Stock',
    },
    {
      image: '/assets/book.png',
      name: 'Mouse',
      price: 25,
      dateAdded: '2026-03-10',
      stock: 'Out of Stock',
    },
    {
      image: '/assets/book.png',
      name: 'Keyboard',
      price: 45,
      dateAdded: '2026-03-12',
      stock: 'In Stock',
    },
    {
      image: '/assets/book.png',
      name: 'Monitor',
      price: 300,
      dateAdded: '2026-03-11',
      stock: 'In Stock',
    },
    {
      image: '/assets/book.png',
      name: 'Printer',
      price: 150,
      dateAdded: '2026-03-09',
      stock: 'Out of Stock',
    },
  ];

  wishCol: { key: string; label: string }[] = [
    { key: 'select', label: 'Select' },
    { key: 'remove', label: 'Remove' },
    { key: 'image', label: 'Images' },
    { key: 'name', label: 'Product Name' },
    { key: 'price', label: 'Unit Price' },
    { key: 'dateAdded', label: 'Date Added' },
    { key: 'stock', label: 'Stock Status' },
  ];
  @ViewChild('imageTemplate') imageTemplate!: TemplateRef<any>;
  @ViewChild('selectTemplate') selectTemplate!: TemplateRef<any>;
  columnTemplates: any = {};

  ngAfterViewInit() {
    this.columnTemplates = {
      image: this.imageTemplate,
      select: this.selectTemplate,
    };
  }
}
