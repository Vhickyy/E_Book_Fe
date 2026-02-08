import { TestBed } from '@angular/core/testing';
import { LoginService } from './login-service';
import { AuthService } from '../auth-service';
import { of, throwError } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call authService.login when login() is called', () => {
    authServiceSpy.login.and.returnValue(of({}));

    service.loginForm.setValue({
      email: 'test@mail.com',
      password: '123456',
    });

    service.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith({
      email: 'test@mail.com',
      password: '123456',
    });
  });

  it('should handle login error', () => {
    authServiceSpy.login.and.returnValue(
      throwError(() => new Error('Login failed')),
    );

    service.loginForm.setValue({
      email: 'test@test.com',
      password: '123456',
    });
    service.login();
    expect(authServiceSpy.login).toHaveBeenCalled();
  });
});
