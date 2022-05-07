import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { RoutePaths } from '@constants/routes';
import { Category } from '@app/datatypes/category';
import { Collection } from '@app/datatypes/collection';
import { AuctionNftItem } from '@app/datatypes/nft-item';
import { User } from '@datatypes/user';

import { NftItemsService } from '@services/nft-items.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  routePaths = RoutePaths;

  hotCollectionSliderOptions: OwlOptions = {
    center: false,
    items: 4,
    loop: true,
    margin: 25,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    responsive: {
      1000: {
        items: 4,
      },
      600: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  };

  newItemsSliderOptions: OwlOptions = {
    center: false,
    items: 4,
    loop: true,
    margin: 25,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    responsive: {
      1000: {
        items: 4,
      },
      600: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  };

  hotCollection: Collection[] = [];
  newItems: AuctionNftItem[] = [];
  topSellers: User[] = [];
  categories: Category[] = [];

  constructor(
    private nftItemsService: NftItemsService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.nftItemsService.getHotCollection().subscribe((data) => {
      this.hotCollection = data;
    });

    this.nftItemsService.getNewItems().subscribe((data) => {
      this.newItems = data.map((item) => {
        const ai = item as AuctionNftItem;
        const isAuctioned = Math.random();

        if (isAuctioned > 0.5) {
          ai.untilDate = new Date();

          const shift = 1 + Math.round(47 * Math.random());
          ai.untilDate.setHours(ai.untilDate.getHours() + shift);
        }

        return ai;
      });
    });

    this.userService.getTopSellers().subscribe((data) => {
      this.topSellers = data;
    });

    this.nftItemsService.getCategories().subscribe((data) => {
      this.categories = data.splice(0, 6);
    });
  }

}
