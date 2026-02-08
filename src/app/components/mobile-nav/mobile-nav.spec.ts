import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileNav } from './mobile-nav';
import { provideRouter } from '@angular/router';

describe('MobileNav', () => {
  let component: MobileNav;
  let fixture: ComponentFixture<MobileNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNav],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close nav when closeNav is called', () => {
    component.mobile.set(true);
    component.closeNav();
    expect(component.mobile()).toBeFalse();
  });
});
