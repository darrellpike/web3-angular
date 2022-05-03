import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { HotToastService } from '@ngneat/hot-toast';

import { NftItem } from '@app/datatypes/nft-item';
import { User } from '@datatypes/user';

import { RoutePaths } from '@constants/routes';

import { NftItemsService } from '@services/nft-items.service';
import { UserService } from '@services/user.service';

enum Tabs {
  OnSale = 0,
  Created,
  Linked,
}

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  routePaths = RoutePaths;
  tabs = Tabs;
  activeTab: Tabs = Tabs.OnSale;

  onSaleItems: NftItem[] = [];
  createdItems: NftItem[] = [];
  linkedItems: NftItem[] = [];
  user: User | undefined;

  constructor(
    private nftItemsService: NftItemsService,
    private userService: UserService,
    private clipboardService: ClipboardService,
    private toastService: HotToastService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // TODO load lists & user data
    this.userService.getUser(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      if (data) {
        this.user = data;

        this.nftItemsService.getUserOnSaleItems(this.user.id).subscribe((data2) => {
          this.onSaleItems = data2;
        });

        this.nftItemsService.getUserCreatedItems(this.user.id).subscribe((data3) => {
          this.createdItems = data3;
        });

        this.nftItemsService.getUserLinkedItems(this.user.id).subscribe((data4) => {
          this.linkedItems = data4;
        });
      }
    });
  }

  copyToClipboard(val: string) {
    this.clipboardService.copy(val);
    this.toastService.success('Copied');
  }

}
