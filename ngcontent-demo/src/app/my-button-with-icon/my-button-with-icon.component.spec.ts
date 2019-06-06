import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtonWithIconComponent } from './my-button-with-icon.component';

describe('MyButtonWithIconComponent', () => {
  let component: MyButtonWithIconComponent;
  let fixture: ComponentFixture<MyButtonWithIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyButtonWithIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyButtonWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
