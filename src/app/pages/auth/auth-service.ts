import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILoginUser, IRegisterUser } from './auth.types';
import { baseUrl } from '../../../environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  register(data: IRegisterUser) {
    return this.http.post(`${baseUrl.apiUrl}/auth/register`, data);
  }

  login(data: ILoginUser) {
    return this.http.post(`${baseUrl}/auth/login`, data);
  }

  uploadAvatar(formData: FormData) {
    return this.http.post<{ avatarPublicId: string }>(
      'http://localhost:3000/auth/upload-avatar',
      formData
    );
  }
}
