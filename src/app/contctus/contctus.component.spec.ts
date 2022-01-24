import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContctusComponent } from './contctus.component';

describe('ContctusComponent', () => {
  let component: ContctusComponent;
  let fixture: ComponentFixture<ContctusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContctusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContctusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
