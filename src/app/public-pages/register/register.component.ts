import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { RoutePaths, UserRoutePaths } from '@constants/routes';
import { fieldHasErr, markControlsAsTouched, showFieldErrs, showFormErrs } from '@utils/forms';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  RoutePaths = RoutePaths;
  fieldHasErr = fieldHasErr;
  showFieldErrs = showFieldErrs;
  showFormErrs = showFormErrs;

  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
    (val) => {
      const data = (val as FormGroup).value;
      if (data.password !== '' && data.password !== data.passwordConfirm) {
        return { passwordMismatch: true };
      }

      return null;
    },
  );

  busy = false;
  registered = false;
  failed = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private toast: HotToastService,
  ) {}

  async register() {
    markControlsAsTouched(this.form);
    if (this.form.invalid) { return; }

    const data = this.form.value;

    const res = await this.userService.register(data.email, data.password);
    debugger;
    if (res) {
      this.router.navigate(['/', RoutePaths.User, UserRoutePaths.Profile]);
    } else {
      this.toast.error('Error on register');
    }
  }
}
