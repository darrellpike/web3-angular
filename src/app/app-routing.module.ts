import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '@constants/routes';
import { UserGuard } from '@core/guards/user.guard';

import { ActivityComponent } from '@pubpages/activity/activity.component';
import { AuctionComponent } from '@pubpages/auction/auction.component';
import { AuthorComponent } from '@pubpages/author/author.component';

import { CollectionComponent } from '@pubpages/collection/collection.component';
import { ConnectWalletComponent } from '@pubpages/connect-wallet/connect-wallet.component';
import { ContactUsComponent } from '@pubpages/contact-us/contact-us.component';

import { HomeComponent } from '@pubpages/home/home.component';

import { LoginFormComponent } from '@pubpages/login-form/login-form.component';

import { NewsComponent } from '@pubpages/news/news.component';
import { NftsCatalogComponent } from '@pubpages/nfts-catalog/nfts-catalog.component';
import { NftItemDetailsComponent } from '@pubpages/nft-item-details/nft-item-details.component';

import { RankingsComponent } from '@pubpages/rankings/rankings.component';
import { RegisterComponent } from '@pubpages/register/register.component';

const CLASS_CONTRAST = 'contrast';
// const CLASS_TRANSPARENT = 'transparent';
const CLASS_LIGHT_SCROLL = 'header-light scroll-light';
const CLASS_LIGHT_SMALLER = 'header-light scroll-light clone smaller';

const routes: Routes = [
  {
    path: RoutePaths.Home,
    component: HomeComponent,
    data: {
      headerClass: 'transparent header-light scroll-light clone smaller',
    },
  },
  {
    path: `${RoutePaths.NftItemDetails}/:id`,
    component: NftItemDetailsComponent,
    data: {
      headerClass: CLASS_LIGHT_SCROLL,
    },
  },
  {
    path: `${RoutePaths.Activity}`,
    component: ActivityComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: `${RoutePaths.Auction}`,
    component: AuctionComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: `${RoutePaths.Author}`,
    component: AuthorComponent,
    data: {
      headerClass: CLASS_LIGHT_SMALLER,
    },
  },
  {
    path: `${RoutePaths.Collection}`,
    component: CollectionComponent,
    data: {
      headerClass: CLASS_LIGHT_SMALLER,
    },
  },
  {
    path: `${RoutePaths.ContactUs}`,
    component: ContactUsComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: `${RoutePaths.LoginForm}`,
    component: LoginFormComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: `${RoutePaths.News}`,
    component: NewsComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: `${RoutePaths.NftsCatalog}`,
    component: NftsCatalogComponent,
    data: {
      headerClass: '', // no classes here
      contentClass: 'mt5r',
    },
  },
  {
    path: `${RoutePaths.Rankings}`,
    component: RankingsComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: `${RoutePaths.Register}`,
    component: RegisterComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: `${RoutePaths.ConnectWallet}`,
    component: ConnectWalletComponent,
    data: {
      headerClass: CLASS_CONTRAST,
    },
  },
  {
    path: RoutePaths.User,
    loadChildren: () => import('@modules/user/user.module').then(
      (m) => m.UserModule,
    ),
    canActivate: [UserGuard],
  },
  {
    path: '**',
    redirectTo: RoutePaths.Home,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
