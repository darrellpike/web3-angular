import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { forkJoin, merge, Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

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
  reload = new Subject<boolean>();

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
    private route: ActivatedRoute,
    private logger: NGXLogger,
  ) { }

  ngOnInit(): void {
    let initialize = true;

    merge(
      this.filters.valueChanges,
      this.reload,
    )
      .pipe(
        untilDestroyed(this),
        filter(() => !initialize),
      )
      .subscribe(() => {
        const filters = this.filters.value;
        this.logger.debug('new filters', filters);
        /* TODO prepare & run search request
        this.nftItemsService.getFilteredItems(...).subscribe((data) => {
          this.items = data;
        });
        */
        this.nftItemsService.getFilteredItems().subscribe((data) => {
          this.items = data;
        });
      });

    const oCategories = this.nftItemsService.getCategories()
      .pipe(
        tap((data) => {
          this.categories = data;

          data.forEach((cat) => {
            (this.filters.get('categories') as FormGroup).addControl(cat.id, new FormControl(false));
          });
        }),
      );

    const oCollections = this.nftItemsService.getCollections()
      .pipe(
        tap((data) => {
          this.collections = data;

          data.forEach((coll) => {
            (this.filters.get('collections') as FormGroup).addControl(coll.id, new FormControl(false));
          });
        }),
      );

    forkJoin([oCategories, oCollections]).subscribe(() => {
      // checkboxes should be added & initialized before handle query params,
      // so subscribe from here

      this.route.queryParams.subscribe((qparams) => {
        if (qparams['category']) {
          const categoriesGrp = this.filters.get('categories');
          if (categoriesGrp) {
            const cat = categoriesGrp.get(qparams['category']);
            if (cat) cat.patchValue(true);
          }
        }

        if (qparams['collection']) {
          const collectionsGrp = this.filters.get('collections');
          if (collectionsGrp) {
            const coll = collectionsGrp.get(qparams['collection']);
            if (coll) coll.patchValue(true);
          }
        }

        if (qparams['status']) {
          const statusesGrp = this.filters.get('statuses');
          if (statusesGrp) {
            const stat = statusesGrp.get(qparams['status']);
            if (stat) stat.patchValue(true);
          }
        }

        initialize = false;
        this.reload.next(true);
      });
    });
  }

  getControl(groupName: string, ctrlName: string): FormControl {
    return ((this.filters.get(groupName) as FormGroup).get(ctrlName) as FormControl);
  }
}
