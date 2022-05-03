import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

import { fieldHasErr, markControlsAsTouched, showFieldErrs, showFormErrs } from '@utils/forms';
import { EmailService } from '@services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9 \-]{6,}$/)]), // TODO: check if phone validator correct
    message: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastService: HotToastService,
    private emailService: EmailService,
  ) { }

  showFieldErrs = showFieldErrs;
  showFormErrs = showFormErrs;
  fieldHasErr = fieldHasErr;
  markControlsAsTouched = markControlsAsTouched;

  sendMessage() {
    debugger;
    this.markControlsAsTouched(this.form);
    if (!this.form.valid) return;

    const data = this.form.value;

    this.emailService.sendEmail(
      data.name,
      data.email,
      data.phone,
      data.message,
    ).subscribe((res) => {
      if (res.status) {
        this.toastService.success('Your message has been sent successfully.');
      } else {
        this.toastService.error('Sorry, error occured this time sending your message.');
      }
    });
  }
}
