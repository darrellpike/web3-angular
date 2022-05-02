import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftItemComponent } from './nft-item.component';

describe('NftItemComponent', () => {
  let component: NftItemComponent;
  let fixture: ComponentFixture<NftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
