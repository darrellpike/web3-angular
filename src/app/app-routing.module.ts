import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '@constants/routes';
import { UserGuard } from '@core/guards/user.guard';
import { HomeComponent } from '@pubpages/home/home.component';
import { NftItemDetailsComponent } from '@pubpages/nft-item-details/nft-item-details.component';

const routes: Routes = [
  {
    path: RoutePaths.Home,
    component: HomeComponent,
  },
  {
    path: `${RoutePaths.NftItemDetails}/:id`,
    component: NftItemDetailsComponent,
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
