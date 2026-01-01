import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenHero } from './gen-hero';
import { provideRouter } from '@angular/router';

describe('GenHero', () => {
  let component: GenHero;
  let fixture: ComponentFixture<GenHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenHero],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GenHero);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('text', 'hi');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
