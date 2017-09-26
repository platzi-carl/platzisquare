import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOfLabelComponent } from './on-of-label.component';

describe('OnOfLabelComponent', () => {
  let component: OnOfLabelComponent;
  let fixture: ComponentFixture<OnOfLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOfLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOfLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
