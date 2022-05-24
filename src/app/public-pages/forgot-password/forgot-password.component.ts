import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { RoutePaths } from '@constants/routes';
import { fieldHasErr, markControlsAsTouched, showFieldErrs } from '@utils/forms';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  RoutePaths = RoutePaths;
  fieldHasErr = fieldHasErr;
  showFieldErrs = showFieldErrs;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  busy = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private toast: HotToastService,
  ) {}

  async restorePassword() {
    markControlsAsTouched(this.form);
    if (this.form.invalid) return;

    const res = await this.userService.restorePassword(this.form.value.email);
    if (res === true) {
      this.toast.success(
        `We have sent a email to an address you provided.<br />
        Follow instructions from email`,
        {
          autoClose: false,
          dismissible: true,
        },
      );
    } else {
      this.toast.error(
        `Sorry, operation failed:<br />
        ${res}`,
        {
          autoClose: false,
          dismissible: true,
        },
      );
    }
  }
}
