import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseTableComponent } from './promise-table.component';

describe('PromiseTableComponent', () => {
  let component: PromiseTableComponent;
  let fixture: ComponentFixture<PromiseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
