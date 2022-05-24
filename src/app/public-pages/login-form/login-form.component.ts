import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { RoutePaths } from '@constants/routes';
import { fieldHasErr, markControlsAsTouched, showFieldErrs } from '@utils/forms';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  RoutePaths = RoutePaths;
  fieldHasErr = fieldHasErr;
  showFieldErrs = showFieldErrs;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  busy = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private toast: HotToastService,
  ) {}

  private navTargetRoute() {
    if (this.route.snapshot.queryParams['returnUrl']) {
      const url = decodeURIComponent(this.route.snapshot.queryParams['returnUrl']);
      this.router.navigateByUrl(url);
    } else {
      this.router.navigate(['/', RoutePaths.Home]);
    }
  }

  async loginByEmail() {
    markControlsAsTouched(this.form);
    if (this.form.invalid) { return; }
    const data = this.form.value;

    this.busy = true;
    const res = await this.userService.loginByEmail(data.email, data.password);
    if (res) {
      this.navTargetRoute();
    } else {
      this.toast.error('Error on login');
    }
  }

  async loginByFb() {
    this.busy = true;
    const res = await this.userService.loginByFb();
    if (res) {
      this.navTargetRoute();
    } else {
      this.toast.error('Error on login');
    }
  }

  async loginByGoogle() {
    this.busy = true;
    const res = await this.userService.loginByGoogle();
    if (res) {
      this.navTargetRoute();
    } else {
      this.toast.error('Error on login');
    }
  }
}
