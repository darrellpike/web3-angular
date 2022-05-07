import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginMotivatorComponent } from './dialog-login-motivator.component';

describe('DialogLoginMotivatorComponent', () => {
  let component: DialogLoginMotivatorComponent;
  let fixture: ComponentFixture<DialogLoginMotivatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoginMotivatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoginMotivatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
