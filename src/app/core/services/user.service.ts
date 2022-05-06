import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '@datatypes/user';
import { UserNotifications } from '@datatypes/notification';
import { users, notifications } from '@app/mock-data/mock';
import { ContractService } from '@services/contract.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private contractService: ContractService,
  ) {}

  private currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUser.asObservable();

  private notifications = new BehaviorSubject<UserNotifications>({
    items: [],
    unreadCount: 0,
  });
  notifications$ = this.notifications.asObservable();

  /*
  constructor() {
    this.currentUser.next(users[0]);
  }
  */

  getTopSellers(): Observable<User[]> {
    return of(users);
  }

  getUser(id: string) {
    const user = users.find(u => u.id === id);
    return of(user);
  }

  getCurrentUser() {
    return of(this.currentUser.value);
  }

  loginUserByAccountId(accountId: string) {
    this.currentUser.next(users[0]); // DEBUG

    this.notifications.next({
      items: notifications,
      unreadCount: 4,
    }); // DEBUG
    // TODO: get user from backend side
    // TODO: load notifications

    this.connectToUserNotifications();
  }

  private connectToUserNotifications() {
    // listen WS to new notifications
  }

  isLogged() {
    return this.currentUser.value !== null;
  }

  signOut() {
    this.notifications.next({
      items: [],
      unreadCount: 0,
    });

    this.currentUser.next(null);
    this.contractService.disconnectAccount();
  }
}
