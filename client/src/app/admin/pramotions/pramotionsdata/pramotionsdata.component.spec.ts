import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PramotionsdataComponent } from './pramotionsdata.component';

describe('PramotionsdataComponent', () => {
  let component: PramotionsdataComponent;
  let fixture: ComponentFixture<PramotionsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PramotionsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PramotionsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
