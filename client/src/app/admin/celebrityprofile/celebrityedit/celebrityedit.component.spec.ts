import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityeditComponent } from './celebrityedit.component';

describe('CelebrityeditComponent', () => {
  let component: CelebrityeditComponent;
  let fixture: ComponentFixture<CelebrityeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
