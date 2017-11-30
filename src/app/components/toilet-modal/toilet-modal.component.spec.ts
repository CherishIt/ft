import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletModalComponent } from './toilet-modal.component';

describe('ToiletModalComponent', () => {
  let component: ToiletModalComponent;
  let fixture: ComponentFixture<ToiletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
