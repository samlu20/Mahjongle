import { TestBed } from '@angular/core/testing';

import { TileHandService } from './tile-hand.service';

describe('TileHandService', () => {
  let service: TileHandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileHandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
