import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedOffComponent } from './logged-off.component';

describe('LoggedOffComponent', () => {
  let component: LoggedOffComponent;
  let fixture: ComponentFixture<LoggedOffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoggedOffComponent]
    });
    fixture = TestBed.createComponent(LoggedOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
