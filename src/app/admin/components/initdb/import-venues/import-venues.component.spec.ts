import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportVenuesComponent } from './import-venues.component';

describe('ImportVenuesComponent', () => {
  let component: ImportVenuesComponent;
  let fixture: ComponentFixture<ImportVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
