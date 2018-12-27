import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewdataComponent } from './reviewdata.component';

describe('ReviewdataComponent', () => {
  let component: ReviewdataComponent;
  let fixture: ComponentFixture<ReviewdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
