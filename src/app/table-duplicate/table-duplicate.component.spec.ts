import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDuplicateComponent } from './table-duplicate.component';

describe('TableDuplicateComponent', () => {
  let component: TableDuplicateComponent;
  let fixture: ComponentFixture<TableDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
