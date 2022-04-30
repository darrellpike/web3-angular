import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsCatalogComponent } from './nfts-catalog.component';

describe('NftsCatalogComponent', () => {
  let component: NftsCatalogComponent;
  let fixture: ComponentFixture<NftsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftsCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
