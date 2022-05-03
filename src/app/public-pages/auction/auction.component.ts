import { Component, OnInit } from '@angular/core';

import { RoutePaths } from '@constants/routes';
import { NftItem } from '@app/datatypes/nft-item';
// import { User } from '@datatypes/user';

import { NftItemsService } from '@services/nft-items.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
})
export class AuctionComponent implements OnInit {
  routePaths = RoutePaths;
  items: NftItem[] = [];

  constructor(
    private nftItemsService: NftItemsService,
  ) { }

  ngOnInit(): void {
    this.nftItemsService.getAuctionItems().subscribe((data) => {
      this.items = data;
    });
  }

}
