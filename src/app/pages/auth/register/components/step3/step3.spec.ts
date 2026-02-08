import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3 } from './step3';
import { RegisterService } from '../../register-service';

describe('Step3', () => {
  let component: Step3;
  let fixture: ComponentFixture<Step3>;
  let registerServiceSpy: jasmine.SpyObj<RegisterService>;

  beforeEach(async () => {
    registerServiceSpy = jasmine.createSpyObj('RegisterService', [
      'imagePreview',
    ]);
    await TestBed.configureTestingModule({
      imports: [Step3],
      providers: [{ provide: RegisterService, useValue: registerServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(Step3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
