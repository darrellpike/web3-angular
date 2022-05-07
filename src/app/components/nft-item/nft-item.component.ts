import { Component, Input } from '@angular/core';
import { NftItem } from '@app/datatypes/nft-item';
import { RoutePaths } from '@constants/routes';
import { NftItemsService } from '@services/nft-items.service';

@Component({
  selector: 'app-nft-item',
  templateUrl: './nft-item.component.html',
  styleUrls: ['./nft-item.component.scss'],
})
export class NftItemComponent {
  routePaths = RoutePaths;

  @Input() item!: NftItem;
  @Input() countdownUntil?: Date | null;
  @Input() countdownAtTop: boolean = true;
  @Input() class: string = '';

  constructor(
    private nftItemsService: NftItemsService,
  ) {}

  onBuyNow() {
    this.nftItemsService.makeRequestForBuy(this.item);
  }

  onPlaceBid() {
    this.nftItemsService.makeRequestForBid(this.item);
  }
}
