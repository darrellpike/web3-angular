import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlaceBidComponent } from './dialog-place-bid.component';

describe('DialogPlaceBidComponent', () => {
  let component: DialogPlaceBidComponent;
  let fixture: ComponentFixture<DialogPlaceBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPlaceBidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlaceBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
