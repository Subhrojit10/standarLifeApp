import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrowComponent } from './bread-crow.component';

describe('BreadCrowComponent', () => {
  let component: BreadCrowComponent;
  let fixture: ComponentFixture<BreadCrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
