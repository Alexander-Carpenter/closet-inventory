import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOutfitComponent } from './my-outfit.component';

describe('MyOutfitComponent', () => {
  let component: MyOutfitComponent;
  let fixture: ComponentFixture<MyOutfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOutfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOutfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
