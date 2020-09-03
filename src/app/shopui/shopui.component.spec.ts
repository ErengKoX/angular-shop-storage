import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopuiComponent } from './shopui.component';

describe('ShopuiComponent', () => {
  let component: ShopuiComponent;
  let fixture: ComponentFixture<ShopuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
