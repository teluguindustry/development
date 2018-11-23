import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityaddComponent } from './celebrityadd.component';

describe('CelebrityaddComponent', () => {
  let component: CelebrityaddComponent;
  let fixture: ComponentFixture<CelebrityaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
