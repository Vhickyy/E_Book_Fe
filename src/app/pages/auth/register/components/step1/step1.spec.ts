import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Step1 } from './step1';
import { ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';

describe('Step1', () => {
  let component: Step1;
  let fixture: ComponentFixture<Step1>;

  beforeEach(async () => {
    const fb = new FormBuilder();
    await TestBed.configureTestingModule({
      imports: [Step1],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Step1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger file input click on selectFile()', () => {
    const fakeInput = {
      nativeElement: { click: jasmine.createSpy('click') },
    } as unknown as ElementRef<HTMLInputElement>;
    (component as any).fileEl = jasmine.createSpy().and.returnValue(fakeInput);
    component.selectFile();

    expect(fakeInput.nativeElement.click).toHaveBeenCalled();
  });

  it('should call handleFileSelection when a file is selected', () => {
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    const event = {
      target: { files: [file] },
    } as unknown as Event;

    component.onFileChange(event);
  });
});
