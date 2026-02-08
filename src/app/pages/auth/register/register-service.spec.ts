import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register-service';
import { AuthService } from '../auth-service';
import { of, throwError } from 'rxjs';

fdescribe('RegisterService', () => {
  let service: RegisterService;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', [
      'register',
      'uploadAvatar',
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    });
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize signals with default values', () => {
    expect(service.activeStep()).toBe(0);
    expect(service.imagePreview()).toBe('');
  });

  it('should call auth register', () => {
    authServiceSpy.register.and.returnValue(of({}));
    service.registerUser();

    expect(authServiceSpy.register).toHaveBeenCalled();
  });

  it('should call auth register with error', () => {
    authServiceSpy.register.and.returnValue(
      throwError(() => new Error('Register failed')),
    );
    service.registerUser();

    expect(authServiceSpy.register).toHaveBeenCalled();
  });

  it('should call auth upload avatar', () => {
    authServiceSpy.uploadAvatar.and.returnValue(of({ avatarPublicId: '123' }));
    const file = new File([''], 'test.png');
    service.handleFileSelection(file);

    expect(authServiceSpy.uploadAvatar).toHaveBeenCalled();
  });

  it('should call auth upload avatar with error', () => {
    authServiceSpy.uploadAvatar.and.returnValue(
      throwError(() => new Error('Login failed')),
    );
    const file = new File([''], 'test.png');
    service.handleFileSelection(file);

    expect(authServiceSpy.uploadAvatar).toHaveBeenCalled();
  });

  it('should return true when form invalid', () => {
    expect(service.proceedToStepTwo()).toBeTrue();
  });

  it('should return false when form valid', () => {
    service.registerForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@test.com',
      password: 'Password1',
    });

    expect(service.proceedToStepTwo()).toBeFalse();
  });
});
