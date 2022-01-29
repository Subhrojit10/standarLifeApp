import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageServiceComponent } from './first-page-service.component';

describe('FirstPageServiceComponent', () => {
  let component: FirstPageServiceComponent;
  let fixture: ComponentFixture<FirstPageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
