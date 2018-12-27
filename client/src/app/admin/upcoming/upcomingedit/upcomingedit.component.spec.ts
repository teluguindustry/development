import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingeditComponent } from './upcomingedit.component';

describe('UpcomingeditComponent', () => {
  let component: UpcomingeditComponent;
  let fixture: ComponentFixture<UpcomingeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
