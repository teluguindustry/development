import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebritydataComponent } from './celebritydata.component';

describe('CelebritydataComponent', () => {
  let component: CelebritydataComponent;
  let fixture: ComponentFixture<CelebritydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebritydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
