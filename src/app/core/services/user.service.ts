import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@datatypes/user';
import { users } from '@app/mock-data/mock';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getTopSellers(): Observable<User[]> {
    return of(users);
  }
}
