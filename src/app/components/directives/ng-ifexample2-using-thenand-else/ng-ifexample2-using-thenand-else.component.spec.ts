import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfexample2UsingThenandElseComponent } from './ng-ifexample2-using-thenand-else.component';

describe('NgIfexample2UsingThenandElseComponent', () => {
  let component: NgIfexample2UsingThenandElseComponent;
  let fixture: ComponentFixture<NgIfexample2UsingThenandElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfexample2UsingThenandElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfexample2UsingThenandElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
