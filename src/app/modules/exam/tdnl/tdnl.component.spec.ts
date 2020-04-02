import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdnlComponent } from './tdnl.component';

describe('TdnlComponent', () => {
  let component: TdnlComponent;
  let fixture: ComponentFixture<TdnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
