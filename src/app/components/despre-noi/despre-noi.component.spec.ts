import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreNoiComponent } from './despre-noi.component';

describe('DespreNoiComponent', () => {
  let component: DespreNoiComponent;
  let fixture: ComponentFixture<DespreNoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespreNoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespreNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
