import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '@constants/routes';
import { UserGuard } from '@core/guards/user.guard';
import { HomeComponent } from './public-pages/home/home.component';

const routes: Routes = [
  {
    path: RoutePaths.Home,
    component: HomeComponent,
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
