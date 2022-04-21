import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftItemDetailsComponent } from './nft-item-details.component';

describe('NftItemDetailsComponent', () => {
  let component: NftItemDetailsComponent;
  let fixture: ComponentFixture<NftItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
