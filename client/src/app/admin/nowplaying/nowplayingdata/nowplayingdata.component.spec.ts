import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowplayingdataComponent } from './nowplayingdata.component';

describe('NowplayingdataComponent', () => {
  let component: NowplayingdataComponent;
  let fixture: ComponentFixture<NowplayingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowplayingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowplayingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
