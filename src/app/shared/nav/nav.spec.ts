import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nav } from './nav';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('Nav', () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nav],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a length equal to the length navItems', () => {
    const navElements = fixture.debugElement.queryAll(By.css('a'));
    expect(navElements.length).toBe(component.navItems.length);
    expect(component.navItems).toBeTruthy();
  });
});
