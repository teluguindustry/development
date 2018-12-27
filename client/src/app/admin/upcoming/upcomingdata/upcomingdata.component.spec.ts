import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingdataComponent } from './upcomingdata.component';

describe('UpcomingdataComponent', () => {
  let component: UpcomingdataComponent;
  let fixture: ComponentFixture<UpcomingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
