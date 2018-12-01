import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieseditComponent } from './moviesedit.component';

describe('MovieseditComponent', () => {
  let component: MovieseditComponent;
  let fixture: ComponentFixture<MovieseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
