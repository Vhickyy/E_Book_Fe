import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2 } from './step2';
import { RegisterService } from '../../register-service';

describe('Step2', () => {
  let component: Step2;
  let fixture: ComponentFixture<Step2>;
  let registerServiceSpy: jasmine.SpyObj<RegisterService>;

  beforeEach(async () => {
    registerServiceSpy = jasmine.createSpyObj('RegisterService', ['']);
    await TestBed.configureTestingModule({
      imports: [Step2],
      providers: [{ provide: RegisterService, useValue: registerServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(Step2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
