import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPTComponent } from './tpt.component';

describe('TPTComponent', () => {
  let component: TPTComponent;
  let fixture: ComponentFixture<TPTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
