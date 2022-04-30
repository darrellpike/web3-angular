import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NftItem } from '@datatypes/collection-item';
import { allItems, nftItems, hotItems, bids, bidsHistory } from '@app/mock-data/mock';

@Injectable({
  providedIn: 'root',
})
export class NftItemsService {
  // constructor() { }

  getHotCollection(): Observable<NftItem[]> {
    return of(hotItems);
  }

  getNewItems(): Observable<NftItem[]> {
    return of(nftItems);
  }

  getItem(id: string): Observable<NftItem | undefined> {
    const item = allItems.find(i => i.id === id);
    return of(item);
  }

  getItemBids(id: string) {
    return of(bids);
  }

  getItemBidsHistory(id: string) {
    return of(bidsHistory);
  }
}
