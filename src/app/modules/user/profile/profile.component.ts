import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    username: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    site: new FormControl(''),
    twitterName: new FormControl(''),
    instagramName: new FormControl(''),
    notifications: new FormGroup({
      itemSold: new FormControl(false),
      auctionExpiration: new FormControl(false),
      bidActivity: new FormControl(false),
      outbid: new FormControl(false),
      priceChange: new FormControl(false),
      successfulPurchase: new FormControl(false),
    }),
  });

  showFieldErrs = showFieldErrs;
  showFormErrs = showFormErrs;
  fieldHasErr = fieldHasErr;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((data) => {
      console.log('user', data);
      this.user = data;

      if (data) {
        this.form.get('username')?.patchValue(data.name);
      }
    });
  }

  //
}
