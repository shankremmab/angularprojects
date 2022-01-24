import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// fdescribe("HomeComponent",()=>
// {
//   it('first test',() => {
//     var a=20
//     expect(a).toBe(10);
//   });
// })


fdescribe("HomeComponent",()=>
{
  function add(a,b)
  {
    var c=a+b
    return c
  }
  it('first test',() => {
    var result=add(10,20)
    expect(result).toBe(20);
  });
  it('first test',() => {
    var result=add(10,20)
    expect(result).toBe(30);
  });
  it('first test',() => {
    var result=add(10,20)
    expect(result).toBe(30);
  });


})