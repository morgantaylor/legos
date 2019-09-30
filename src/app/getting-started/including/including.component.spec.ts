import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludingComponent } from './including.component';

describe('IncludingComponent', () => {
  let component: IncludingComponent;
  let fixture: ComponentFixture<IncludingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
