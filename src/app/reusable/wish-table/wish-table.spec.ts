import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishTable } from './wish-table';

describe('WishTable', () => {
  let component: WishTable;
  let fixture: ComponentFixture<WishTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
