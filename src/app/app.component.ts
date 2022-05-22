import {
  AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NGXLogger } from 'ngx-logger';
import { HotToastService } from '@ngneat/hot-toast';

import { DialogBuyNowComponent } from '@components/dialog-buy-now/dialog-buy-now.component';
import {
  DialogLoginMotivatorComponent, MotivatorTypes,
} from '@components/dialog-login-motivator/dialog-login-motivator.component';
import { DialogPlaceBidComponent } from '@components/dialog-place-bid/dialog-place-bid.component';

import { RoutePaths, UserRoutePaths } from '@constants/routes';
import { ContractService } from '@services/contract.service';
import { NftItemsService } from '@services/nft-items.service';
import { UserService } from '@services/user.service';

import { Account } from '@datatypes/account';
import { LoggedUser } from '@datatypes/user';
import { UserNotifications, UserNotificationEvent } from '@datatypes/notification';

const SHOW_NOTIFICATIONS = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'web3-marketplace';

  routePaths = RoutePaths;
  UserRoutePaths = UserRoutePaths;
  headerClass = '';
  contentClass = '';
  user: LoggedUser | null = null;
  userNotifications: UserNotifications = {
    items: [],
    unreadCount: 0,
  };
  userNotificationsUnreadCount = 0;
  userAccounts: Account[] = [];

  showNotificationMenu = false;
  showProfileMenu = false;

  @ViewChild('content') content!: ElementRef<HTMLElement>;
  @ViewChild('quickSearch') quickSearch!: ElementRef<HTMLElement>;


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (
      event.key === 'Escape'
      && (
        this.showNotificationMenu
        || this.showProfileMenu
      )
    ) {
      this.showNotificationMenu = false;
      this.showProfileMenu = false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contractService: ContractService,
    private nftItemsService: NftItemsService,
    private userService: UserService,
    private modalService: NgbModal,
    private logger: NGXLogger,
    private toast: HotToastService,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.logger.debug('route data', this.route.snapshot.firstChild?.data);

        const routeDate = this.route.snapshot.firstChild?.data || {};

        if (routeDate['headerClass']) {
          this.headerClass = routeDate['headerClass'];
        } else this.headerClass = '';

        if (routeDate['contentClass']) {
          this.contentClass = routeDate['contentClass'];
        } else this.contentClass = 'no-bottom no-top';

        this.closeSubmenus(null);
      }
    });

    this.contractService.accounts$.subscribe((accounts) => {
      this.userAccounts = accounts;

      /*
      if (accounts.length > 0) { // DEBUG
        this.userService.loginUserByAccountId(accounts[0].id);
      }
      */
    });

    this.userService.currentUser$.subscribe((data) => {
      this.user = data;
    });

    this.userService.notifications$.subscribe((data) => {
      data.items = data.items
        .slice(0, SHOW_NOTIFICATIONS)
        .map((item) => {
          switch (item.event) {
            case UserNotificationEvent.StartedFollowing:
              item.message = 'started following you';
              break;

            case UserNotificationEvent.LikedItem:
              item.message = 'liked your item';
              break;
          }

          return item;
        });

      this.userNotifications = data;
    });

    this.nftItemsService.requestBid$.subscribe((nft) => {
      if (!this.user) {
        // show dialog to login
        const modalRefMot = this.modalService.open(DialogLoginMotivatorComponent);
        modalRefMot.componentInstance.type = MotivatorTypes.Bid;
        return;
      }

      const modalRefBid = this.modalService.open(DialogPlaceBidComponent);
      modalRefBid.componentInstance.nft = nft;
      modalRefBid.result
        .then((result) => {
          this.logger.debug('bid dialog result', result);
          // TODO
        })
        .catch((err) => {
          if (![ModalDismissReasons.BACKDROP_CLICK, ModalDismissReasons.ESC].includes(err)) {
            this.logger.error('bid dialog err', err);
          }
        });
    });

    this.nftItemsService.requestBuy$.subscribe((nft) => {
      if (!this.user) {
        // show dialog to login
        const modalRefMot = this.modalService.open(DialogLoginMotivatorComponent);
        modalRefMot.componentInstance.type = MotivatorTypes.Buy;
        return;
      }

      const modalRefBuy = this.modalService.open(DialogBuyNowComponent);
      modalRefBuy.componentInstance.nft = nft;
      modalRefBuy.result
        .then((result) => {
          this.logger.debug('buy dialog result', result);
          // TODO
        })
        .catch((err) => {
          if (![ModalDismissReasons.BACKDROP_CLICK, ModalDismissReasons.ESC].includes(err)) {
            this.logger.error('buy dialog err', err);
          }
        });
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.quickSearch.nativeElement, 'input') // quick search
      .pipe(
        map((ev) => (ev.target as HTMLInputElement).value),
        debounceTime(600),
        distinctUntilChanged(),
      )
      .subscribe((str) => {
        this.logger.debug('TODO: quick search', str);
        if (str === '') return;
        // TODO: implement quick search
      });
  }

  onActivate() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  connectWallet() {
    this.contractService.connectAccount().subscribe({
      next: () => {},
      error: (err) => {
        this.logger.debug('err', err);
        this.toast.error('Error on connect to wallet');
      },
    });
  }

  closeSubmenus(event: MouseEvent | null) {
    if (event) {
      event.stopPropagation();
    }
    this.showNotificationMenu = false;
    this.showProfileMenu = false;
  }

  onSignOut() {
    this.closeSubmenus(null);
    this.userService.signOut();
  }

  onOpenNotificationMenu() {
    this.showNotificationMenu = !this.showNotificationMenu;
    this.showProfileMenu = false;
  }

  onOpenProfileMenu() {
    this.showNotificationMenu = false;
    this.showProfileMenu = !this.showProfileMenu;
  }
}
