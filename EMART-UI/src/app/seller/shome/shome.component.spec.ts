import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SHomeComponent } from './shome.component';

describe('SHomeComponent', () => {
  let component: SHomeComponent;
  let fixture: ComponentFixture<SHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
