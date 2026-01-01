import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Book } from './book';
import { IBook } from '../../../types';

describe('Book', () => {
  let component: Book;
  let fixture: ComponentFixture<Book>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Book);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('book', {
      id: 1,
      title: 'Book',
      author: 'Vee',
      price: 35,
    } as unknown as IBook);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
