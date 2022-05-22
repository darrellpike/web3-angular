import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ClipboardModule } from 'ngx-clipboard';
import { HotToastModule } from '@ngneat/hot-toast';
import { Web3ModalModule, Web3ModalService } from '@mindsorg/web3modal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { UserService } from '@services/user.service';
import { EmailService } from '@services/email.service';
import { ContractService } from '@services/contract.service';

import { ActivityComponent } from '@pubpages/activity/activity.component';
import { AuctionComponent } from '@pubpages/auction/auction.component';
import { AuthorComponent } from '@pubpages/author/author.component';

import { CollectionComponent } from '@pubpages/collection/collection.component';
import { ConnectWalletComponent } from '@pubpages/connect-wallet/connect-wallet.component';
import { ContactUsComponent } from '@pubpages/contact-us/contact-us.component';

import { HelpCenterComponent } from '@pubpages/help-center/help-center.component';
import { HomeComponent } from './public-pages/home/home.component';

import { LoginFormComponent } from '@pubpages/login-form/login-form.component';

import { NewsComponent } from '@pubpages/news/news.component';
import { NftsCatalogComponent } from '@pubpages/nfts-catalog/nfts-catalog.component';
import { NftItemDetailsComponent } from '@pubpages/nft-item-details/nft-item-details.component';

import { RankingsComponent } from '@pubpages/rankings/rankings.component';
import { RegisterComponent } from '@pubpages/register/register.component';

import { CountdownComponent } from '@components/countdown/countdown.component';
import { DialogBuyNowComponent } from '@components/dialog-buy-now/dialog-buy-now.component';
import { DialogLoginMotivatorComponent } from '@components/dialog-login-motivator/dialog-login-motivator.component';
import { DialogPlaceBidComponent } from '@components/dialog-place-bid/dialog-place-bid.component';
import { NftItemComponent } from '@components/nft-item/nft-item.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  getFirestore, provideFirestore, connectFirestoreEmulator, enableIndexedDbPersistence,
} from '@angular/fire/firestore';
import { getStorage, provideStorage, connectStorageEmulator } from '@angular/fire/storage';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { getFunctions, provideFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
// import { DropdownComponent } from '@components/dropdown/dropdown.component';
import { environment } from '@env';

@NgModule({
  declarations: [
    ActivityComponent,
    AppComponent,
    AuctionComponent,
    AuthorComponent,

    CollectionComponent,
    ConnectWalletComponent,
    ContactUsComponent,
    CountdownComponent,

    DialogBuyNowComponent,
    DialogLoginMotivatorComponent,
    DialogPlaceBidComponent,
    // DropdownComponent,

    HelpCenterComponent,
    HomeComponent,

    LoginFormComponent,

    NewsComponent,
    NftItemComponent,
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
    ClipboardModule,
    HotToastModule.forRoot({
      reverseOrder: true,
      dismissible: true,
      // autoClose: false,
    }),
    NgbModule,
    SharedModule,
    Web3ModalModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      if (environment.useEmulators) {
        const firestore = getFirestore();
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        enableIndexedDbPersistence(firestore);
        return firestore;
      } else {
        return getFirestore();
      }
    }),
    provideAuth(() => {
      if (environment.useEmulators) {
        const fireauth = getAuth();
        connectAuthEmulator(fireauth, 'http://localhost:9099'); // <---FireAuth Port
        return fireauth;
      } else {
        return getAuth();
      }
    }),
    provideStorage(() => {
      if (environment.useEmulators) {
        const firestorage = getStorage();
        connectStorageEmulator(firestorage, 'localhost', 9199); // <---- Firestorage Port
        return firestorage;
      } else {
        return getStorage();
      }
    }),
    provideFunctions(() => {
      if (environment.useEmulators) {
        const firefunctions = getFunctions();
        connectFunctionsEmulator(firefunctions, 'localhost', 5001); // <--- FireFunctions Port
        return firefunctions;
      } else {
        return getFunctions();
      }
    }),
    provideAnalytics(() => getAnalytics()),
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      // serverLogLevel: NgxLoggerLevel.ERROR
      level: isDevMode() ? NgxLoggerLevel.DEBUG : NgxLoggerLevel.OFF,
    }),
  ],
  providers: [
    {
      provide: Web3ModalService,
      useFactory: () => {
        return new Web3ModalService({
          network: 'mainnet',
          cacheProvider: false,
          disableInjectedProvider: false,
          providerOptions: {
            injected: {
              display: {
                name: 'MetaMask',
                description: 'Connect with the provider in your Browser',
              },
              package: null,
            },
            // TODO: more providers
          },
        });
      },
    },
    ContractService,
    EmailService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
