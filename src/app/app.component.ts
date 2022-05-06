import {
  AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { RoutePaths, UserRoutePaths } from '@constants/routes';
import { ContractService } from '@services/contract.service';
import { UserService } from '@services/user.service';
import { User } from './datatypes/user';
import { UserNotifications, UserNotificationEvent } from '@datatypes/notification';
import { Account } from './datatypes/account';

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
  user: User | null = null;
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
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('route data', this.route.snapshot.firstChild?.data);

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
      console.log('accs', accounts);
      this.userAccounts = accounts;

      if (accounts.length > 0) { // DEBUG
        this.userService.loginUserByAccountId(accounts[0].id);
      }
    });

    this.userService.currentUser$.subscribe((data) => {
      console.log('user', data);
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
      console.log('notifications', data);
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
        console.log('TODO: quick search', str);
        if (str === '') return;
        // TODO: implement quick seqrch
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
        console.log('err', err);
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
