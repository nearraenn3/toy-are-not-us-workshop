import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyProductComponent } from './toy-product.component';

describe('ToyProductComponent', () => {
  let component: ToyProductComponent;
  let fixture: ComponentFixture<ToyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
