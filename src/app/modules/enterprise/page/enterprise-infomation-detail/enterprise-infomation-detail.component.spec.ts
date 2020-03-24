import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseInfomationDetailComponent } from './enterprise-infomation-detail.component';

describe('EnterpriseInfomationDetailComponent', () => {
  let component: EnterpriseInfomationDetailComponent;
  let fixture: ComponentFixture<EnterpriseInfomationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseInfomationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseInfomationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
