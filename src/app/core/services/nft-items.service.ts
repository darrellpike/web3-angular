/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NftItem } from '@app/datatypes/nft-item';
import { Collection } from '@app/datatypes/collection';
import {
  allItems, nftItems, hotCollections, bids, bidsHistory,
  auctionItems, collectionItems, collections, categories,
} from '@app/mock-data/mock';

@Injectable({
  providedIn: 'root',
})
export class NftItemsService {
  // constructor() { }

  getHotCollection(): Observable<Collection[]> {
    return of(hotCollections);
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

  getUserOwnedItems(userId: string) {
    return of(collectionItems);
  }

  getUserOnSaleItems(userId: string) {
    return of(collectionItems);
  }

  getUserCreatedItems(userId: string) {
    return of(collectionItems);
  }

  getUserLinkedItems(userId: string) {
    return of(collectionItems);
  }

  getFilteredItems() {
    return of(nftItems);
  }

  getCollections() {
    return of(collections);
  }

  getCategories() {
    return of(categories);
  }
}
