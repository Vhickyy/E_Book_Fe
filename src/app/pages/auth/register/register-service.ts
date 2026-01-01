import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { IRegisterUser } from '../auth.types';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  authService = inject(AuthService);
  activeStep = signal(0);
  // selectedFile = signal<File | null>(null);
  imagePreview = signal<string>('');
  avatarPublicId = signal<string>('');
  error = signal<any>('');
  loading = signal<boolean>(false);
  http = inject(HttpClient);

  private fb = inject(FormBuilder);

  registerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
      ],
    ],
  });

  registerUser() {
    // this.http.get('/hii').subscribe((data) => console.log(data));
    this.authService
      .register({
        ...(this.registerForm.value as unknown as IRegisterUser),
        avatarPublicId: '123',
        // avatarPublicId: this.avatarPublicId(),
      })
      .subscribe({
        next: (data) => {
          console.log({ data });
        },
        error: (e) => console.log({ e }),
      });
  }

  handleFileSelection(file: File) {
    const formData = new FormData();
    formData.append('avatar', file);

    this.loading.set(true);
    this.authService.uploadAvatar(formData).subscribe({
      next: (data) => {
        // this.selectedFile.set(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview.set(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        this.avatarPublicId.set(data.avatarPublicId);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      },
    });
  }

  proceedToStepTwo(): boolean {
    if (
      this.registerForm.get('firstName')?.invalid ||
      this.registerForm.get('lastName')?.invalid ||
      this.registerForm.get('email')?.invalid ||
      this.registerForm.get('password')?.invalid ||
      this.loading()
    )
      return true;

    return false;
  }
}
