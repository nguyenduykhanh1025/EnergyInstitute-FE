import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTNLComponent } from './ptnl.component';

describe('PTNLComponent', () => {
  let component: PTNLComponent;
  let fixture: ComponentFixture<PTNLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTNLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTNLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
