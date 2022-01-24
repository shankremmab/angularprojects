import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDassboardComponent } from './user-dassboard.component';

describe('UserDassboardComponent', () => {
  let component: UserDassboardComponent;
  let fixture: ComponentFixture<UserDassboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDassboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDassboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
