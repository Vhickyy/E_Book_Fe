import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfContainer } from './pdf-container';

describe('PdfContainer', () => {
  let component: PdfContainer;
  let fixture: ComponentFixture<PdfContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
