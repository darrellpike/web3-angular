import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { EmailService } from '@services/email.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    EmailService,
    UserService,
  ],
  exports: [],
})
export class SharedModule { }
