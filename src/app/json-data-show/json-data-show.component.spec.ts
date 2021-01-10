import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDataShowComponent } from './json-data-show.component';

describe('JsonDataShowComponent', () => {
  let component: JsonDataShowComponent;
  let fixture: ComponentFixture<JsonDataShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDataShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
