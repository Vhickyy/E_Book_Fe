import { httpResource } from '@angular/common/http';
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterService } from '../../register-service';

@Component({
  selector: 'app-step1',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './step1.html',
  styleUrl: './step1.css',
})
export class Step1 {
  regService = inject(RegisterService);
  fileEl = viewChild<ElementRef<HTMLInputElement>>('fileEl');

  selectFile() {
    this.fileEl()?.nativeElement.click();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.regService.handleFileSelection(file);
  }
}
