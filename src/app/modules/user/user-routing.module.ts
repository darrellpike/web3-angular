import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRoutePaths } from '@constants/routes';
import { ProfileComponent } from './profile/profile.component';
import { CreateCollectibleComponent } from './create-collectible/create-collectible.component';
import { CreateNftsComponent } from './create-nfts/create-nfts.component';

const CLASS_TRANSPARENT = 'transparent';

const routes: Routes = [
  {
    path: UserRoutePaths.Profile,
    component: ProfileComponent,
    data: {
      headerClass: CLASS_TRANSPARENT,
    },
  },
  {
    path: UserRoutePaths.CreateCollectible,
    component: CreateCollectibleComponent,
    data: {
      headerClass: CLASS_TRANSPARENT,
    },
  },
  {
    path: UserRoutePaths.CreateNft,
    component: CreateNftsComponent,
    data: {
      headerClass: CLASS_TRANSPARENT,
    },
  },
  {
    path: '**',
    redirectTo: UserRoutePaths.Profile,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
