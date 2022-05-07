import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutePaths } from '@constants/routes';
import { NftItem } from '@app/datatypes/nft-item';
import { Bid } from '@app/datatypes/bid';
import { NftItemsService } from '@services/nft-items.service';

enum Tabs {
  Details = 1,
  Bids = 2,
  History = 3,
}

@Component({
  selector: 'app-nft-item-details',
  templateUrl: './nft-item-details.component.html',
  styleUrls: ['./nft-item-details.component.scss'],
})
export class NftItemDetailsComponent implements OnInit {
  routePaths = RoutePaths;

  item: NftItem | undefined;
  tabs = Tabs;
  activeTab = Tabs.Details;
  bids: Bid[] = [];
  bidsHistory: Bid[] = [];

  constructor(
    private nftItemsService: NftItemsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.nftItemsService.getItem(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      this.item = data;

      if (this.item) {
        this.nftItemsService.getItemBids(this.item.id)
          .subscribe((bids) => this.bids = bids);

        this.nftItemsService.getItemBidsHistory(this.item.id)
          .subscribe((bidsHistory) => this.bidsHistory = bidsHistory);
      }
    });
  }

  activateTab(tab: Tabs) {
    this.activeTab = tab;
  }

  buyNow() {
    if (this.item) {
      this.nftItemsService.makeRequestForBuy(this.item);
    }
  }

  placeBid() {
    if (this.item) {
      this.nftItemsService.makeRequestForBid(this.item);
    }
  }
}
