import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarnewslistComponent } from './sidebarnewslist.component';

describe('SidebarnewslistComponent', () => {
  let component: SidebarnewslistComponent;
  let fixture: ComponentFixture<SidebarnewslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarnewslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarnewslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
