import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { NftItem } from '@datatypes/collection-item';
import { User } from '@datatypes/user';

import { NftItemsService } from '@services/nft-items.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  hotCollection: NftItem[] = [];

  newItems: NftItem[] = [];

  topSellers: User[] = [];

  constructor(
    private nftItemsService: NftItemsService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.nftItemsService.getHotCollection().subscribe((data) => {
      this.hotCollection = data;
      console.log('hot', data);
    });

    this.nftItemsService.getNewItems().subscribe((data) => {
      this.newItems = data;
      console.log('new items', data);
    });

    this.userService.getTopSellers().subscribe((data) => {
      this.topSellers = data;
      console.log('top sellers', data);
    });
  }

}
