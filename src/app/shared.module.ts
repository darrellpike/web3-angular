import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { EmailService } from '@services/email.service';
import { ContractService } from '@services/contract.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    ContractService,
    EmailService,
    UserService,
  ],
  exports: [],
})
export class SharedModule { }
