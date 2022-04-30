import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutePaths } from '@constants/routes';
import { NftItem } from '@app/datatypes/collection-item';
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
      debugger;
    });

    if (this.item) {
      this.nftItemsService.getItemBids(this.item.id).subscribe((data) => {
        this.bids = data;
        console.log('bids', data);
      });

      this.nftItemsService.getItemBidsHistory(this.item.id).subscribe((data) => {
        this.bidsHistory = data;
        console.log('bids hist', data);
      });
    }
  }

  activateTab(tab: Tabs) {
    this.activeTab = tab;
  }
}
