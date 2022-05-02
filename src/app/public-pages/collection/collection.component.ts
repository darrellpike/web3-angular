import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutePaths } from '@constants/routes';
import { NftItem } from '@datatypes/collection-item';
// import { User } from '@datatypes/user';

import { NftItemsService } from '@services/nft-items.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  routePaths = RoutePaths;

  onSaleItems: NftItem[] = [];
  ownedItems: NftItem[] = [];

  constructor(
    private nftItemsService: NftItemsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // TODO: fix
    this.nftItemsService.getOnSaleItems(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      this.onSaleItems = data;
    });

    this.nftItemsService.getOwnedItems(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      this.ownedItems = data;
    });
  }

}
