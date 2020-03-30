import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitiesShowComponent } from './productivities-show.component';

describe('ProductivitiesShowComponent', () => {
  let component: ProductivitiesShowComponent;
  let fixture: ComponentFixture<ProductivitiesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivitiesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivitiesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
