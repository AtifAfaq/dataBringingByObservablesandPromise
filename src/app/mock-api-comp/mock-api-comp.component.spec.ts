import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockApiCompComponent } from './mock-api-comp.component';

describe('MockApiCompComponent', () => {
  let component: MockApiCompComponent;
  let fixture: ComponentFixture<MockApiCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockApiCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockApiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
