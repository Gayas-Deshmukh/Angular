import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForExample2GetAndShowUserDetailsComponent } from './ng-for-example2-get-and-show-user-details.component';

describe('NgForExample2GetAndShowUserDetailsComponent', () => {
  let component: NgForExample2GetAndShowUserDetailsComponent;
  let fixture: ComponentFixture<NgForExample2GetAndShowUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForExample2GetAndShowUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForExample2GetAndShowUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
