import { TestBed } from '@angular/core/testing';
import { DataBringService } from './data-bring.service';


describe('DataBringService', () => {
  let service: DataBringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
