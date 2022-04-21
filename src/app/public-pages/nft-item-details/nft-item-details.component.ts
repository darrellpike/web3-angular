import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutePaths } from '@constants/routes';
import { NftItem } from '@app/datatypes/collection-item';
import { NftItemsService } from '@services/nft-items.service';

@Component({
  selector: 'app-nft-item-details',
  templateUrl: './nft-item-details.component.html',
  styleUrls: ['./nft-item-details.component.scss'],
})
export class NftItemDetailsComponent implements OnInit {
  routePaths = RoutePaths;

  item: NftItem | undefined;

  constructor(
    private nftItemsService: NftItemsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.nftItemsService.getItem(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      this.item = data;
    });
  }

}
