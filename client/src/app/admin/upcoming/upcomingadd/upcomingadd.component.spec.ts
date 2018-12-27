import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingaddComponent } from './upcomingadd.component';

describe('UpcomingaddComponent', () => {
  let component: UpcomingaddComponent;
  let fixture: ComponentFixture<UpcomingaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
