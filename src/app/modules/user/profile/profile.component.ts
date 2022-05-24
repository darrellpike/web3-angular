import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { NGXLogger } from 'ngx-logger';

import { User } from '@app/datatypes/user';
import { UserService } from '@services/user.service';
import {
  fieldHasErr, markControlsAsTouched,
  showFieldErrs, showFormErrs,
} from '@utils/forms';

enum Tabs {
  Profile = 0,
  Notifications,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  tabs = Tabs;
  activeTab: Tabs = Tabs.Profile;
  user: User | null = null;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nickname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    photoUrl: new FormControl(''),
    phoneNumber: new FormControl(''),
    site: new FormControl('', [(ctrl) => {
      if (ctrl.value.length > 0) {
        const tmp = ctrl.value.trim();

        if (!tmp.match(/^http(s{0,1}):\/\/.*\..*$/)) {
          return { url: true };
        }
      }

      return null;
    }]),
    twitterName: new FormControl(''),
    instagramName: new FormControl(''),
    notifications: new FormGroup({
      itemSold: new FormControl(true),
      auctionExpiration: new FormControl(true),
      bidActivity: new FormControl(true),
      outbid: new FormControl(true),
      priceChange: new FormControl(true),
      successfulPurchase: new FormControl(true),
    }),
  });

  showFieldErrs = showFieldErrs;
  showFormErrs = showFormErrs;
  fieldHasErr = fieldHasErr;

  constructor(
    private userService: UserService,
    private toast: HotToastService,
    private logger: NGXLogger,
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();

    if (this.user) {
      this.form.get('name')?.patchValue(this.user.data.name);
      this.form.get('nickname')?.patchValue(this.user.data.nickname);
      this.form.get('email')?.patchValue(this.user.data.email);
      this.form.get('photoUrl')?.patchValue(this.user.data.photoUrl);
      this.form.get('phoneNumber')?.patchValue(this.user.data.phoneNumber);
      this.form.get('site')?.patchValue(this.user.data.site);
      this.form.get('twitterName')?.patchValue(this.user.data.twitterName);
      this.form.get('instagramName')?.patchValue(this.user.data.instagramName);
      this.form.get('notifications')?.get('itemSold')?.patchValue(this.user.data.notifications.itemSold);
      this.form.get('notifications')?.get('auctionExpiration')?.patchValue(
        this.user.data.notifications.auctionExpiration,
      );
      this.form.get('notifications')?.get('bidActivity')?.patchValue(this.user.data.notifications.bidActivity);
      this.form.get('notifications')?.get('outbid')?.patchValue(this.user.data.notifications.outbid);
      this.form.get('notifications')?.get('priceChange')?.patchValue(this.user.data.notifications.priceChange);
      this.form.get('notifications')?.get('successfulPurchase')?.patchValue(
        this.user.data.notifications.successfulPurchase,
      );
    }
  }

  async updateProfile() {
    markControlsAsTouched(this.form);
    this.logger.debug('form', this.form);
    if (this.form.invalid) return;

    const data = this.form.value;
    const res = await this.userService.updateProfile(data);
    if (res) {
      this.toast.success('Profile updated');
    } else {
      this.toast.error('Error on update profile');
    }
  }
}
