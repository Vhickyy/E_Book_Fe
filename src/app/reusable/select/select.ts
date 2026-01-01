import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  filters = input.required<string[]>();
  filterBy = model<string>('');
  show = signal<boolean>(false);

  changeFilter(filter: string) {
    this.filterBy.set(filter);
  }

  toggleShow() {
    this.show.update((val) => !val);
  }
}
