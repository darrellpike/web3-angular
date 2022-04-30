import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RoutePaths, UserRoutePaths } from '@constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web3-marketplace';

  routePaths = RoutePaths;
  UserRoutePaths = UserRoutePaths;
  headerClass = '';
  contentClass = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

  }
}
