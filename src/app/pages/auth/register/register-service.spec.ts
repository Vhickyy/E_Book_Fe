import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register-service';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize signals with default values', () => {
    expect(service.activeStep()).toBe(0);
    expect(service.selectedFile()).toBeNull();
    expect(service.imagePreview()).toBe('');
  });

  it('should set selectedFile and update imagePreview when file is handled', (done) => {
    const mockFile = new File(['dummy data'], 'avatar.png', {
      type: 'image/png',
    });

    class MockFileReader {
      onload: ((ev: ProgressEvent<FileReader>) => void) | null = null;
      readAsDataURL = jasmine.createSpy('readAsDataURL').and.callFake(() => {
        if (this.onload) {
          this.onload({
            target: { result: 'data:image/png;base64,abc123' },
          } as any);
        }
      });
    }

    spyOn(window as any, 'FileReader').and.returnValue(
      new MockFileReader() as any
    );

    service.handleFileSelection(mockFile);

    setTimeout(() => {
      expect(service.selectedFile()).toBe(mockFile);
      expect(service.imagePreview()).toBe('data:image/png;base64,abc123');
      done();
    }, 0);
  });

  it('should log form values when registerUser is called', () => {
    const consoleSpy = spyOn(console, 'log');

    service.registerForm.setValue({
      email: 'test@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      password: '123456',
    });

    service.registerUser();

    expect(consoleSpy).toHaveBeenCalledWith({
      email: 'test@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      password: '123456',
    });
  });
});
