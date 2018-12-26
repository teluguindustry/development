import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitefooterComponent } from './websitefooter.component';

describe('WebsitefooterComponent', () => {
  let component: WebsitefooterComponent;
  let fixture: ComponentFixture<WebsitefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
