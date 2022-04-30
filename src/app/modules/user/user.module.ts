import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CreateCollectibleComponent } from './create-collectible/create-collectible.component';
import { CreateNftsComponent } from './create-nfts/create-nfts.component';


@NgModule({
  declarations: [
    ProfileComponent,
    CreateCollectibleComponent,
    CreateNftsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
