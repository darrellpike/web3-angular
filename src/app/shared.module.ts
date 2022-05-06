import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimeAgoPipe } from '@core/pipes/timeago.pipe';

import { UserService } from '@services/user.service';
import { EmailService } from '@services/email.service';
import { ContractService } from '@services/contract.service';

const pipes = [
  TimeAgoPipe,
];

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    ContractService,
    EmailService,
    UserService,
  ],
  exports: [
    ...pipes,
  ],
})
export class SharedModule { }
