import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesdataComponent } from './moviesdata.component';

describe('MoviesdataComponent', () => {
  let component: MoviesdataComponent;
  let fixture: ComponentFixture<MoviesdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
