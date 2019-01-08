import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLaundryComponent } from './my-laundry.component';

describe('MyLaundryComponent', () => {
  let component: MyLaundryComponent;
  let fixture: ComponentFixture<MyLaundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLaundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
