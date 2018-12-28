import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviereviewsComponent } from './moviereviews.component';

describe('MoviereviewsComponent', () => {
  let component: MoviereviewsComponent;
  let fixture: ComponentFixture<MoviereviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviereviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviereviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
