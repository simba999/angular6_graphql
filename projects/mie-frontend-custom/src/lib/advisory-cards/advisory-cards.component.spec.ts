import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryCardsComponent } from './advisory-cards.component';

describe('AdvisoryCardsComponent', () => {
  let component: AdvisoryCardsComponent;
  let fixture: ComponentFixture<AdvisoryCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
