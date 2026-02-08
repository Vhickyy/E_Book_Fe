import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Step1 } from './step1';
import { ElementRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../register-service';

describe('Step1', () => {
  let component: Step1;
  let fixture: ComponentFixture<Step1>;
  let registerService: jasmine.SpyObj<RegisterService>;

  beforeEach(async () => {
    let fb = new FormBuilder();

    registerService = jasmine.createSpyObj(
      'RegisterService',
      ['handleFileSelection', 'imagePreview'],
      {
        registerForm: fb.group({
          firstName: [''],
          lastName: [''],
          email: [''],
          password: [''],
        }),
        handleFileSelection: jasmine.createSpy('handleFileSelection'),
        loading: jasmine.createSpy('loading').and.returnValue(false),
      },
    );

    await TestBed.configureTestingModule({
      imports: [Step1, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        { provide: RegisterService, useValue: registerService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Step1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger click on file input when selectFile is called', () => {
    const clickSpy = jasmine.createSpy('click');

    spyOn(component, 'fileEl').and.returnValue({
      nativeElement: { click: clickSpy },
    } as any);

    component.selectFile();

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should call registerService.handleFileSelection on file change', () => {
    const file = new File(['test'], 'test.png', { type: 'image/png' });

    const event = {
      target: {
        files: [file],
      },
    } as unknown as Event;

    component.onFileChange(event);

    expect(registerService.handleFileSelection).toHaveBeenCalledWith(file);
  });
});
