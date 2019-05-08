import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredListComponent } from './secured-list.component';

describe('SecuredListComponent', () => {
  let component: SecuredListComponent;
  let fixture: ComponentFixture<SecuredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
