import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

import { Category } from '@app/datatypes/category';
import { Collection } from '@app/datatypes/collection';
import { NftItem } from '@app/datatypes/nft-item';

import { NftItemsService } from '@services/nft-items.service';

@UntilDestroy()
@Component({
  selector: 'app-nfts-catalog',
  templateUrl: './nfts-catalog.component.html',
  styleUrls: ['./nfts-catalog.component.scss'],
})
export class NftsCatalogComponent implements OnInit {

  items: NftItem[] = [];
  collections: Collection[] = [];
  categories: Category[] = [];

  filters = new FormGroup({
    categories: new FormGroup({}),
    collections: new FormGroup({}),

    statuses: new FormGroup({
      buyNow: new FormControl(false),
      onAuction: new FormControl(false),
      hasOffers: new FormControl(false),
    }),
    itemType: new FormGroup({
      single: new FormControl(false),
      bundle: new FormControl(false),
    }),
  });


  constructor(
    private nftItemsService: NftItemsService,
  ) { }

  ngOnInit(): void {
    this.nftItemsService.getFilteredItems().subscribe((data) => {
      this.items = data;
    });

    this.nftItemsService.getCategories().subscribe((data) => {
      this.categories = data;

      data.forEach((cat) => {
        (this.filters.get('categories') as FormGroup).addControl(cat.name, new FormControl(false));
      });
    });

    this.nftItemsService.getCollections().subscribe((data) => {
      this.collections = data;

      data.forEach((coll) => {
        (this.filters.get('collections') as FormGroup).addControl(coll.name, new FormControl(false));
      });
    });

    this.filters.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((filters) => {
        console.log('new filters', filters);
        /* TODO prepare & run search request
        this.nftItemsService.getFilteredItems(...).subscribe((data) => {
          this.items = data;
        });
        */
      });
  }

  getControl(groupName: string, ctrlName: string): FormControl {
    return ((this.filters.get(groupName) as FormGroup).get(ctrlName) as FormControl);
  }
}
