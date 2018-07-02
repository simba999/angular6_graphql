import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MieFrontendLibComponent } from './mie-frontend-lib.component';

describe('MieFrontendLibComponent', () => {
  let component: MieFrontendLibComponent;
  let fixture: ComponentFixture<MieFrontendLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieFrontendLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MieFrontendLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
