import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsxComponent } from './spsx.component';

describe('SpsxComponent', () => {
  let component: SpsxComponent;
  let fixture: ComponentFixture<SpsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpsxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
