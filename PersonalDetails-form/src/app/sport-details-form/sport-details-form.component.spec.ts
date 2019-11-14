import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportDetailsFormComponent } from './sport-details-form.component';

describe('SportDetailsFormComponent', () => {
  let component: SportDetailsFormComponent;
  let fixture: ComponentFixture<SportDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
