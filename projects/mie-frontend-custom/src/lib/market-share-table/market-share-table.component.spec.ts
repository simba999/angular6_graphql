import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketShareTableComponent } from './market-share-table.component';

describe('MarketShareTableComponent', () => {
  let component: MarketShareTableComponent;
  let fixture: ComponentFixture<MarketShareTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketShareTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketShareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
