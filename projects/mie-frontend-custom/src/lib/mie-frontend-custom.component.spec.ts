import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MieFrontendCustomComponent } from './mie-frontend-custom.component';

describe('MieFrontendCustomComponent', () => {
  let component: MieFrontendCustomComponent;
  let fixture: ComponentFixture<MieFrontendCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieFrontendCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MieFrontendCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
