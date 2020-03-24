import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseInfomationCommonComponent } from './enterprise-infomation-common.component';

describe('EnterpriseInfomationCommonComponent', () => {
  let component: EnterpriseInfomationCommonComponent;
  let fixture: ComponentFixture<EnterpriseInfomationCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseInfomationCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseInfomationCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
