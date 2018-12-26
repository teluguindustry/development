import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowplayingaddComponent } from './nowplayingadd.component';

describe('NowplayingaddComponent', () => {
  let component: NowplayingaddComponent;
  let fixture: ComponentFixture<NowplayingaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowplayingaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowplayingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
