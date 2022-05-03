import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { HotToastService } from '@ngneat/hot-toast';

import { RoutePaths } from '@constants/routes';
import { NftItem } from '@app/datatypes/nft-item';
import { User } from '@datatypes/user';

import { NftItemsService } from '@services/nft-items.service';

import { users as mockUsers } from '@app/mock-data/mock';

enum Tabs {
  OnSale = 0,
  Owned,
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  routePaths = RoutePaths;
  tabs = Tabs;
  activeTab: Tabs = Tabs.OnSale;
  user!: User;

  onSaleItems: NftItem[] = [];
  ownedItems: NftItem[] = [];

  constructor(
    private nftItemsService: NftItemsService,
    private clipboardService: ClipboardService,
    private toastService: HotToastService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // TODO: get collection
    // TODO: fix it
    this.nftItemsService.getUserOnSaleItems(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      this.onSaleItems = data;
    });

    this.nftItemsService.getUserOwnedItems(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      this.ownedItems = data;
    });

    this.user = mockUsers[0];
  }

  copyToClipboard(val: string) {
    this.clipboardService.copy(val);
    this.toastService.success('Copied');
  }

}
