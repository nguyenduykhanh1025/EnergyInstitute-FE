import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseUpdateComponent } from './enterprise-update.component';

describe('EnterpriseUpdateComponent', () => {
  let component: EnterpriseUpdateComponent;
  let fixture: ComponentFixture<EnterpriseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
