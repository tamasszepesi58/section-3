import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveProfileComponent } from './responsive.profile.component';

describe('ResponsiveProfileComponent', () => {
  let component: ResponsiveProfileComponent;
  let fixture: ComponentFixture<ResponsiveProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
