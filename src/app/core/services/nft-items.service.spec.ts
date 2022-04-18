import { TestBed } from '@angular/core/testing';

import { NftItemsService } from './nft-items.service';

describe('NftItemsService', () => {
  let service: NftItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
