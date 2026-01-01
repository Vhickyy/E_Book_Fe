import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select } from './select';

describe('Select', () => {
  let component: Select;
  let fixture: ComponentFixture<Select>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Select],
    }).compileComponents();

    fixture = TestBed.createComponent(Select);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeFilter', () => {
    component.changeFilter('science');
    expect(component.filterBy()).toBe('science');
  });

  it('should call toggle show', () => {
    component.toggleShow();
    expect(component.show()).toBeTrue();
  });
});
