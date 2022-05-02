import { Component, Input } from '@angular/core';
import { NftItem } from '@datatypes/collection-item';
import { Countdown } from '@datatypes/countdown';
import { RoutePaths } from '@constants/routes';

@Component({
  selector: 'app-nft-item',
  templateUrl: './nft-item.component.html',
  styleUrls: ['./nft-item.component.scss'],
})
export class NftItemComponent {
  routePaths = RoutePaths;

  @Input() item!: NftItem;
  @Input() countdown?: Countdown;
  @Input() class: string = '';

  onBuyNow() {

  }

  onPlaceBid() {

  }
}
