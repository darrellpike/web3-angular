import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNftsComponent } from './create-nfts.component';

describe('CreateNftsComponent', () => {
  let component: CreateNftsComponent;
  let fixture: ComponentFixture<CreateNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
