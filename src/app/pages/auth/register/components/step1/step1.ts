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

  // selectedFile: File | null = null;
  // imagePreview = signal<string>('');
  // step = model<number>(0);
  // registerForm = input.required<FormGroup>();

  // avatarUploadResource = httpResource(() => 'http://localhost:3000/hii');

  // selectFile() {
  //   this.fileEl()?.nativeElement.click();
  // }

  // uploadFile(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const file = input.files?.[0];

  //   if (file) {
  //     this.selectedFile = file;

  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.imagePreview.set(e.target?.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // changeStep() {
  //   this.step.set(1);
  // }
}
