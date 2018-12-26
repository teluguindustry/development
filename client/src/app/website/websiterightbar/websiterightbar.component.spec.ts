import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiterightbarComponent } from './websiterightbar.component';

describe('WebsiterightbarComponent', () => {
  let component: WebsiterightbarComponent;
  let fixture: ComponentFixture<WebsiterightbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiterightbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiterightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
