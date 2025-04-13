import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingProgramsComponent } from './upcoming-programs.component';

describe('UpcomingProgramsComponent', () => {
  let component: UpcomingProgramsComponent;
  let fixture: ComponentFixture<UpcomingProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingProgramsComponent]
    });
    fixture = TestBed.createComponent(UpcomingProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
