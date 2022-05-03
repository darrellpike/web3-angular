import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendEmail(name: string, email: string, phone: string, message: string) {
    return of({ status: true });
  }
}
