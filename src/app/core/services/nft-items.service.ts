/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { NftItem } from '@app/datatypes/nft-item';
import { Collection } from '@app/datatypes/collection';
import {
  allItems, nftItems, hotCollections, bids, bidsHistory,
  auctionItems, collectionItems, collections, categories,
} from '@app/mock-data/mock';
import { User } from '@app/datatypes/user';

@Injectable({
  providedIn: 'root',
})
export class NftItemsService {
  private requestBid = new Subject<NftItem>();
  requestBid$ = this.requestBid.asObservable();

  private requestBuy = new Subject<NftItem>();
  requestBuy$ = this.requestBuy.asObservable();

  getHotCollection(): Observable<Collection[]> {
    return of([...hotCollections]).pipe(delay(100));
  }

  getNewItems(): Observable<NftItem[]> {
    return of([...nftItems]).pipe(delay(200));
  }

  getItem(id: string): Observable<NftItem | undefined> {
    const item = allItems.find(i => i.id === id);
    return of(item).pipe(delay(180));
  }

  getItemBids(id: string) {
    return of([...bids]).pipe(delay(300));
  }

  getItemBidsHistory(id: string) {
    return of([...bidsHistory]).pipe(delay(200));
  }

  getAuctionItems() {
    return of([...auctionItems]).pipe(delay(360));
  }

  getUserOwnedItems(userId: string) {
    return of([...collectionItems]).pipe(delay(220));
  }

  getUserOnSaleItems(userId: string) {
    return of([...collectionItems]).pipe(delay(320));
  }

  getUserCreatedItems(userId: string) {
    return of([...collectionItems]).pipe(delay(160));
  }

  getUserLinkedItems(userId: string) {
    return of([...collectionItems]).pipe(delay(190));
  }

  getFilteredItems() {
    return of([...nftItems]).pipe(delay(300));
  }

  getCollections() {
    return of([...collections]).pipe(delay(100));
  }

  getCategories() {
    return of([...categories]).pipe(delay(180));
  }

  makeRequestForBid(nft: NftItem) {
    this.requestBid.next(nft);
  }

  makeRequestForBuy(nft: NftItem) {
    this.requestBuy.next(nft);
  }

  buy(item: NftItem, user: User) {
    // TODO: buy nft
  }

  saveBid(item: NftItem, bidValue: number, user: User) {
    // TODO: save bid to DB
  }
}
