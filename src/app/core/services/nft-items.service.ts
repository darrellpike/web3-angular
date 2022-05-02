/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NftItem } from '@datatypes/collection-item';
import {
  allItems, nftItems, hotItems, bids, bidsHistory,
  auctionItems, collectionItems,
} from '@app/mock-data/mock';

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

  getAuctionItems() {
    return of(auctionItems);
  }

  getOwnedItems(userId: string) {
    return of(collectionItems);
  }

  getOnSaleItems(userId: string) {
    return of(collectionItems);
  }
}
