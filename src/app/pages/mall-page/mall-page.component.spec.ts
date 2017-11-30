import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallPageComponent } from './mall-page.component';

describe('MallPageComponent', () => {
  let component: MallPageComponent;
  let fixture: ComponentFixture<MallPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
