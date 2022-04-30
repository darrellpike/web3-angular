import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollectibleComponent } from './create-collectible.component';

describe('CreateCollectibleComponent', () => {
  let component: CreateCollectibleComponent;
  let fixture: ComponentFixture<CreateCollectibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCollectibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollectibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
