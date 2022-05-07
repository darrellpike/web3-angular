import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  hours = '0';
  minutes = '00';
  seconds = '00';

  done = false;

  @Input() untilDate!: Date;

  ngOnInit(): void {
    this.calcCounter();

    interval(1000)
      .pipe(
        untilDestroyed(this),
        takeWhile(() => !this.done),
      )
      .subscribe(() => this.calcCounter());
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnDestroy(): void {}

  calcCounter() {
    let hours = 0, minutes = 0, seconds = 0;
    const now = Date.now();
    const until = this.untilDate.valueOf();

    if (until > now) {
      let tmp = Math.ceil((until - now) / 1000); // in seconds

      seconds = tmp % 60;
      tmp = Math.floor(tmp / 60); // in minutes
      minutes = tmp % 60;
      hours = Math.floor(tmp / 60);
    } else {
      this.done = true;
    }

    this.hours = `${hours}`;
    this.minutes = minutes > 9 ? `${minutes}` : `0${minutes}`;
    this.seconds = seconds > 9 ? `${seconds}` : `0${seconds}`;
  }
}
