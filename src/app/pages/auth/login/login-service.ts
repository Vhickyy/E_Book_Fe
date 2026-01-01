import { inject, Injectable } from '@angular/core';
import { AuthService } from '../auth-service';
import { FormBuilder, Validators } from '@angular/forms';
import { ILoginUser } from '../auth.types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authService = inject(AuthService);

  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  async login() {
    this.authService
      .login(this.loginForm.value as unknown as ILoginUser)
      .subscribe({
        next: (data) => console.log({ data }),
        error: (e) => console.log({ e }),
      });
  }
}
