import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackhellComponent } from './callbackhell.component';

describe('CallbackhellComponent', () => {
  let component: CallbackhellComponent;
  let fixture: ComponentFixture<CallbackhellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackhellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackhellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
