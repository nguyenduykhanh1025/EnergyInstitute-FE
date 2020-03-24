import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseInfomationComponent } from './enterprise-infomation.component';

describe('EnterpriseInfomationComponent', () => {
  let component: EnterpriseInfomationComponent;
  let fixture: ComponentFixture<EnterpriseInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
