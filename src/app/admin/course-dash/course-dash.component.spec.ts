import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDashComponent } from './course-dash.component';

describe('CourseDashComponent', () => {
  let component: CourseDashComponent;
  let fixture: ComponentFixture<CourseDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDashComponent]
    });
    fixture = TestBed.createComponent(CourseDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
