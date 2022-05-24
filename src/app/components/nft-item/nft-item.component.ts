import { Component, OnInit, Input } from '@angular/core';

import { NftItem } from '@app/datatypes/nft-item';
import { RoutePaths } from '@constants/routes';
import { NftItemsService } from '@services/nft-items.service';

@Component({
  selector: 'app-nft-item',
  templateUrl: './nft-item.component.html',
  styleUrls: ['./nft-item.component.scss'],
})
export class NftItemComponent implements OnInit {
  routePaths = RoutePaths;
  showBuyShare = false;

  fbShare: string = '';
  twShare: string = '';
  mailTo: string = '';

  private readonly mailSubject = 'I wanted you to see this NFT item';

  @Input() item!: NftItem;
  @Input() countdownUntil?: Date | null;
  @Input() countdownAtTop: boolean = true;
  @Input() class: string = '';

  constructor(
    private nftItemsService: NftItemsService,
  ) {}

  ngOnInit(): void {
    const pageUrl = window.location.href;

    this.fbShare = `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(pageUrl)}`;
    this.twShare = `https://twitter.com/intent/tweet?url=${ encodeURIComponent(pageUrl)}`;

    this.mailTo = `mailto:?subject=${encodeURIComponent(this.mailSubject)}&body=${encodeURIComponent(`Check out this page ${pageUrl}`)}`;
  }

  onBuyNow() {
    this.nftItemsService.makeRequestForBuy(this.item);
  }

  onPlaceBid() {
    this.nftItemsService.makeRequestForBid(this.item);
  }

  toggleExtra() {
    this.showBuyShare = !this.showBuyShare;
  }

  hideExtra() {
    this.showBuyShare = false;
  }
}
