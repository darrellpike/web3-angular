/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {
  Auth, signOut, signInWithPopup, UserCredential,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, FacebookAuthProvider,
} from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { NGXLogger } from 'ngx-logger';

import { LoggedUser, User, UserData } from '@datatypes/user';
import { UserNotifications } from '@datatypes/notification';
import { users, notifications } from '@app/mock-data/mock';
import { ContractService } from '@services/contract.service';
import { EmailService } from '@services/email.service';
import { RoutePaths } from '@constants/routes';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private router: Router,
    private contractService: ContractService,
    private emailService: EmailService,
    private fireAuth: Auth,
    private fireStore: Firestore,
    private logger: NGXLogger,
  ) {}

  private currentUser = new BehaviorSubject<LoggedUser | null>(null);
  currentUser$ = this.currentUser.asObservable();

  private notifications = new BehaviorSubject<UserNotifications>({
    items: [],
    unreadCount: 0,
  });
  notifications$ = this.notifications.asObservable();

  getTopSellers(): Observable<User[]> {
    return of(users);
  }

  getUser(id: string) {
    const user = users.find(u => u.data.userId === id);
    return of(user);
  }

  getCurrentUser() {
    return this.currentUser.value;
  }

  loginUserByAccountId(accountId: string) {
    /*
    this.currentUser.next(users[0]); // DEBUG

    this.notifications.next({
      items: notifications,
      unreadCount: 4,
    }); // DEBUG
    */
    // TODO: get user from backend side
    // TODO: load notifications


  }

  private connectToUserNotifications() {
    // listen WS to new notifications
  }

  isLogged() {
    return this.currentUser.value !== null;
  }

  async signOut() {
    await signOut(this.fireAuth);

    this.notifications.next({
      items: [],
      unreadCount: 0,
    });

    this.currentUser.next(null);
    this.contractService.disconnectAccount();
    this.router.navigate([RoutePaths.Home]);
  }

  private async processUserCreds(creds: UserCredential) {
    const ref = doc(this.fireStore, `users/${creds.user.uid}`);
    let snap = await getDoc(ref);
    let user: LoggedUser;

    if (!snap.exists()) {
      const userData = LoggedUser.getDefaultData();
      userData.userId = creds.user.uid;

      if (creds.user.displayName) userData.name = creds.user.displayName;
      if (creds.user.displayName) userData.nickname = creds.user.displayName;
      if (creds.user.photoURL) userData.photoUrl = creds.user.photoURL;
      if (creds.user.email) userData.email = creds.user.email;
      if (creds.user.emailVerified) userData.emailVerified = creds.user.emailVerified;
      if (creds.user.phoneNumber) userData.phoneNumber = creds.user.phoneNumber;

      user = new LoggedUser(userData, creds);

      await setDoc(ref, user.data);
    } else {
      user = new LoggedUser(snap.data() as UserData, creds);
      await updateDoc(ref, { lastLoginAt: new Date() }); // maybe update more fields?
    }

    this.currentUser.next(user);
    this.connectToUserNotifications();
  }

  async register(email: string, password: string) {
    try {
      const creds = await createUserWithEmailAndPassword(this.fireAuth, email, password);
      this.processUserCreds(creds);

      return true;
    } catch (err) {
      this.logger.error('reg err', err);

      return false;
    }
  }

  async loginByEmail(email: string, password: string) {
    try {
      const creds = await signInWithEmailAndPassword(this.fireAuth, email, password);
      this.processUserCreds(creds);

      return true;
    } catch (err) {
      this.logger.error('email login err', err);

      return false;
    }
  }

  async loginByFb() {
    try {
      const creds = await signInWithPopup(this.fireAuth, new FacebookAuthProvider());
      this.processUserCreds(creds);

      return true;
    } catch (err) {
      this.logger.error('FB login err', err);

      return false;
    }
  }

  async loginByGoogle() {
    try {
      const creds = await signInWithPopup(this.fireAuth, new GoogleAuthProvider());
      this.processUserCreds(creds);

      return true;
    } catch (err) {
      this.logger.error('google login err', err);

      return false;
    }
  }

  async updateProfile(data: UserData) {
    try {
      if (!this.currentUser.value) throw new Error('User must be logged to update profile');

      const ref = doc(this.fireStore, `users/${this.currentUser.value.uid}`);
      await updateDoc(ref, { ...data });

      // update current user data;
      const user = this.currentUser.value;
      user.data = data;
      this.currentUser.next(user);

      return true;
    } catch (err) {
      this.logger.error('profile update err', err);
      return false;
    }
  }

  async restorePassword(email: string): Promise<string | boolean> {
    // TODO
    return 'Function in development';
  }
}
