import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydataComponent } from './categorydata.component';

describe('CategorydataComponent', () => {
  let component: CategorydataComponent;
  let fixture: ComponentFixture<CategorydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
