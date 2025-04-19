import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMithilaComponent } from './about-mithila.component';

describe('AboutMithilaComponent', () => {
  let component: AboutMithilaComponent;
  let fixture: ComponentFixture<AboutMithilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMithilaComponent]
    });
    fixture = TestBed.createComponent(AboutMithilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
