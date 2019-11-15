import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SundaySchoolFormComponent } from './sunday-school-form.component';

describe('SundaySchoolFormComponent', () => {
  let component: SundaySchoolFormComponent;
  let fixture: ComponentFixture<SundaySchoolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundaySchoolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundaySchoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
