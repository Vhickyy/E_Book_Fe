import {
  Component,
  computed,
  effect,
  input,
  OnInit,
  signal,
  viewChild,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-wish-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatCheckboxModule,
  ],

  templateUrl: './wish-table.html',
  styleUrl: './wish-table.css',
})
export class WishTable implements OnInit {
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data());
  }
  templates = input.required<Record<string, TemplateRef<any>>>({});
  dataSource!: MatTableDataSource<any>;
  columns = input.required<{ key: string; label: string }[]>();
  data = input.required<any[]>();

  displayedcolumns = computed(() => this.columns().map((col) => col.key));
  // paginator = viewChild.required(MatPaginator);
  // sort = viewChild.required(MatSort);
  searchText = signal('');

  isAllSelected() {
    throw new Error('Method not implemented.');
  }
  isIndeterminate() {
    throw new Error('Method not implemented.');
  }
  toggleSelectAll() {
    throw new Error('Method not implemented.');
  }
  // toggleSelectAll($event: Event) {
  //   throw new Error('Method not implemented.');
  // }

  // private _effect = effect(() => {
  //   if (this.dataSource) {
  //     this.dataSource.paginator = this.paginator();
  //     this.dataSource.sort = this.sort();
  //     this.dataSource.filter = this.searchText().trim().toLowerCase();
  //   }
  // });

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator();
  //   this.dataSource.sort = this.sort();
  // }
}
