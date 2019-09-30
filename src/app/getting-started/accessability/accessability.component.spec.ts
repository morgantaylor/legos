import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessabilityComponent } from './accessability.component';

describe('AccessabilityComponent', () => {
  let component: AccessabilityComponent;
  let fixture: ComponentFixture<AccessabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
