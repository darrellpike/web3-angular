import { Component/*, OnInit*/ } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { RoutePaths } from '@constants/routes';
import { fieldHasErr, markControlsAsTouched, showFieldErrs } from '@utils/forms';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent/* implements OnInit*/ {
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
    private userService: UserService,
    private toast: HotToastService,
  ) {}

  /*
  ngOnInit(): void {
    //
  }
  */


  async loginByEmail() {
    markControlsAsTouched(this.form);
    if (this.form.invalid) { return; }
    const data = this.form.value;

    this.busy = true;
    const res = await this.userService.loginByEmail(data.email, data.password);
    if (res) {
      this.router.navigate([RoutePaths.Home]);
    } else {
      this.toast.error('Error on login');
    }
  }

  async loginByFb() {
    this.busy = true;
    const res = await this.userService.loginByFb();
    if (res) {
      this.router.navigate([RoutePaths.Home]);
    } else {
      this.toast.error('Error on login');
    }
  }

  async loginByGoogle() {
    this.busy = true;
    const res = await this.userService.loginByGoogle();
    if (res) {
      this.router.navigate([RoutePaths.Home]);
    } else {
      this.toast.error('Error on login');
    }
  }
}
