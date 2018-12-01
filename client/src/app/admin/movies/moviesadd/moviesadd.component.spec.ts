import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesaddComponent } from './moviesadd.component';

describe('MoviesaddComponent', () => {
  let component: MoviesaddComponent;
  let fixture: ComponentFixture<MoviesaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
