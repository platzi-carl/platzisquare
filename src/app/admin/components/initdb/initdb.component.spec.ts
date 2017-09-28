import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitdbComponent } from './initdb.component';

describe('InitdbComponent', () => {
  let component: InitdbComponent;
  let fixture: ComponentFixture<InitdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
