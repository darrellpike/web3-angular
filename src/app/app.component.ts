import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { RoutePaths, UserRoutePaths } from '@constants/routes';
import { ContractService } from '@services/contract.service';

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

  @ViewChild('content') content!: ElementRef<HTMLElement>;
  @ViewChild('quickSearch') quickSearch!: ElementRef<HTMLElement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contractService: ContractService,
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
      }
    });

    this.contractService.accounts$.subscribe((accounts) => {
      console.log('accs', accounts);

      if (accounts.length > 0) { // DEBUG
        this.contractService.accountInfo(accounts[0]).subscribe((info) => {
          console.log('balance', info.balance);
        });
      }
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
}
