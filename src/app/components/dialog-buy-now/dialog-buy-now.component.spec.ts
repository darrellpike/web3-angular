import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuyNowComponent } from './dialog-buy-now.component';

describe('DialogBuyNowComponent', () => {
  let component: DialogBuyNowComponent;
  let fixture: ComponentFixture<DialogBuyNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuyNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuyNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
