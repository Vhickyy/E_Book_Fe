import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { baseUrl } from '../../../environments';
import { ILoginUser, IRegisterUser } from './auth.types';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call register API', () => {
    const data: IRegisterUser = {
      email: 'test@example.com',
      password: '123456',
      firstName: 'Victoria',
      lastName: 'Victoria',
    };

    service.register(data).subscribe();

    const req = httpMock.expectOne(`${baseUrl.apiUrl}/auth/register`);

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(data);

    req.flush({ success: true });
  });

  it('should call login API', () => {
    const mockResponse = { token: '123' };
    const data: ILoginUser = {
      email: 'test@example.com',
      password: '123456',
    };
    service.login(data).subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${baseUrl.apiUrl}/auth/login`);

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(data);

    req.flush(mockResponse);
  });

  it('should handle login error', () => {
    const loginPayload = { email: 'test@test.com', password: '123456' };

    service.login(loginPayload).subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err).toBeTruthy();
      },
    });

    const req = httpMock.expectOne((request) =>
      request.url.endsWith('/auth/login'),
    );

    req.flush('Login failed', { status: 400, statusText: 'Bad Request' });
  });

  it('should call upload avatar API', () => {
    const formData = new FormData();
    formData.append('avatar', new File([''], 'avatar.png'));

    service.uploadAvatar(formData).subscribe();

    const req = httpMock.expectOne(`${baseUrl.apiUrl}/auth/upload-avatar`);

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(formData);

    req.flush({ success: true });
  });
});
