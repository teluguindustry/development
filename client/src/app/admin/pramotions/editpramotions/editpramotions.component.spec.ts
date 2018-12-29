import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpramotionsComponent } from './editpramotions.component';

describe('EditpramotionsComponent', () => {
  let component: EditpramotionsComponent;
  let fixture: ComponentFixture<EditpramotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpramotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpramotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
