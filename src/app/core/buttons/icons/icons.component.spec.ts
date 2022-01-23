import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIconsComponent } from './icons.component';

describe('BtnIconsComponent', () => {
  let component: BtnIconsComponent;
  let fixture: ComponentFixture<BtnIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
