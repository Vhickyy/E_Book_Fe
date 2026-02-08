import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Register } from './register';
import { RegisterService } from './register-service';
import { FormBuilder } from '@angular/forms';

describe('Register', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;
  let registerServiceSpy: jasmine.SpyObj<RegisterService>;

  beforeEach(async () => {
    const fb = new FormBuilder();

    registerServiceSpy = jasmine.createSpyObj(
      'RegisterService',
      ['registerUser'],
      {
        activeStep: () => 0,
        loading: () => false,
        imagePreview: () => '',

        registerForm: fb.group({
          firstName: [''],
          lastName: [''],
          email: [''],
          password: [''],
        }),
      },
    );

    await TestBed.configureTestingModule({
      imports: [Register],
      providers: [
        provideRouter([]),
        { provide: RegisterService, useValue: registerServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call registerUser on submit', () => {
    const mockEvent = new Event('submit');
    spyOn(mockEvent, 'preventDefault');

    component.registerUser(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(registerServiceSpy.registerUser).toHaveBeenCalled();
  });
});
