import { Component, OnInit } from '@angular/core';

import { RoutePaths } from '@constants/routes';
import { AuctionNftItem } from '@app/datatypes/nft-item';

import { NftItemsService } from '@services/nft-items.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
})
export class AuctionComponent implements OnInit {
  routePaths = RoutePaths;
  items: AuctionNftItem[] = [];

  constructor(
    private nftItemsService: NftItemsService,
  ) { }

  ngOnInit(): void {
    this.nftItemsService.getAuctionItems().subscribe((data) => {
      this.items = data.map((item) => {
        const ai = item as AuctionNftItem;
        ai.untilDate = new Date();

        const shift = 1 + Math.round(47 * Math.random());
        ai.untilDate.setHours(ai.untilDate.getHours() + shift);

        return ai;
      });
    });
  }
}
