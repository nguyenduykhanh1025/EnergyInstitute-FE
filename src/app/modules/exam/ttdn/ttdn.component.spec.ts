import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TTDNComponent } from './ttdn.component';

describe('TTDNComponent', () => {
  let component: TTDNComponent;
  let fixture: ComponentFixture<TTDNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TTDNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TTDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
