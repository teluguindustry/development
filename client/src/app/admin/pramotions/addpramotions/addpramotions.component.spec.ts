import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpramotionsComponent } from './addpramotions.component';

describe('AddpramotionsComponent', () => {
  let component: AddpramotionsComponent;
  let fixture: ComponentFixture<AddpramotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpramotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpramotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
