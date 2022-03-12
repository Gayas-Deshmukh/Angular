import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIFExample1Component } from './ng-ifexample1.component';

describe('NgIFExample1Component', () => {
  let component: NgIFExample1Component;
  let fixture: ComponentFixture<NgIFExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIFExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIFExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
