import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletCardComponent } from './toilet-card.component';

describe('ToiletCardComponent', () => {
  let component: ToiletCardComponent;
  let fixture: ComponentFixture<ToiletCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
