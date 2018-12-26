import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebargalleryComponent } from './sidebargallery.component';

describe('SidebargalleryComponent', () => {
  let component: SidebargalleryComponent;
  let fixture: ComponentFixture<SidebargalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebargalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebargalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
