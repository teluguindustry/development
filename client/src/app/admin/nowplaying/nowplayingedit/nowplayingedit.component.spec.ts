import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowplayingeditComponent } from './nowplayingedit.component';

describe('NowplayingeditComponent', () => {
  let component: NowplayingeditComponent;
  let fixture: ComponentFixture<NowplayingeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowplayingeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowplayingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
