import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryeditComponent } from './galleryedit.component';

describe('GalleryeditComponent', () => {
  let component: GalleryeditComponent;
  let fixture: ComponentFixture<GalleryeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
