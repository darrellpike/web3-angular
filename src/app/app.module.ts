import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared.module';

import { ActivityComponent } from '@pubpages/activity/activity.component';
import { AuctionComponent } from '@pubpages/auction/auction.component';
import { AuthorComponent } from '@pubpages/author/author.component';

import { CollectionComponent } from '@pubpages/collection/collection.component';
import { ConnectWalletComponent } from '@pubpages/connect-wallet/connect-wallet.component';
import { ContactUsComponent } from '@pubpages/contact-us/contact-us.component';

import { HomeComponent } from './public-pages/home/home.component';

import { LoginFormComponent } from '@pubpages/login-form/login-form.component';

import { NewsComponent } from '@pubpages/news/news.component';
import { NftsCatalogComponent } from '@pubpages/nfts-catalog/nfts-catalog.component';
import { NftItemDetailsComponent } from '@pubpages/nft-item-details/nft-item-details.component';

import { RankingsComponent } from '@pubpages/rankings/rankings.component';
import { RegisterComponent } from '@pubpages/register/register.component';

@NgModule({
  declarations: [
    ActivityComponent,
    AppComponent,
    AuctionComponent,
    AuthorComponent,

    CollectionComponent,
    ConnectWalletComponent,
    ContactUsComponent,

    HomeComponent,

    LoginFormComponent,

    NewsComponent,
    NftsCatalogComponent,
    NftItemDetailsComponent,

    RankingsComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
