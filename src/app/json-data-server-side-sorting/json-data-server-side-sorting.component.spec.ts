import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDataServerSideSortingComponent } from './json-data-server-side-sorting.component';

describe('JsonDataServerSideSortingComponent', () => {
  let component: JsonDataServerSideSortingComponent;
  let fixture: ComponentFixture<JsonDataServerSideSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDataServerSideSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDataServerSideSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
