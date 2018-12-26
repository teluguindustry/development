import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteheaderComponent } from './websiteheader.component';

describe('WebsiteheaderComponent', () => {
  let component: WebsiteheaderComponent;
  let fixture: ComponentFixture<WebsiteheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
