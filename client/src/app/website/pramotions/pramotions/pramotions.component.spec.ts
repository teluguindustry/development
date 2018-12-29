import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PramotionsComponent } from './pramotions.component';

describe('PramotionsComponent', () => {
  let component: PramotionsComponent;
  let fixture: ComponentFixture<PramotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PramotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PramotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
