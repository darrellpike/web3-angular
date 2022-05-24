import { UserCredential } from '@angular/fire/auth';

export interface UserData {
  // by firebase
  userId: string;
  name: string;
  nickname: string;
  photoUrl: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  createdAt: Date;
  lastLoginAt: Date;

  // by template
  site: string;
  twitterName: string;
  instagramName: string;
  notifications: {
    itemSold: boolean;
    auctionExpiration: boolean;
    bidActivity: boolean;
    outbid: boolean;
    priceChange: boolean;
    successfulPurchase: boolean;
  },
}

const defaultAvatar = '/assets/images/user1.svg';

export class User {
  data: UserData;

  constructor(data?: UserData) {
    this.data = data ? data : User.getDefaultData();
  }

  get name() { return this.data.nickname || this.data.name || ''; }
  get avatar() { return  this.data.photoUrl !== '' ? this.data.photoUrl : defaultAvatar; }

  static getDefaultData() {
    const now = new Date();

    return {
      userId: '',
      name: '',
      nickname: '',
      photoUrl: '',
      email: '',
      emailVerified: false,
      phoneNumber: '',
      createdAt: now,
      lastLoginAt: now,

      site: '',
      twitterName: '',
      instagramName: '',
      notifications: {
        itemSold: true,
        auctionExpiration: true,
        bidActivity: true,
        outbid: true,
        priceChange: true,
        successfulPurchase: true,
      },
    };
  }

  static createFromPartial(data: Partial<UserData>) { // for mock data
    const def = User.getDefaultData();

    if (data.userId) def.userId = data.userId;
    if (data.name) def.name = data.name;
    if (data.nickname) def.nickname = data.nickname;
    if (data.photoUrl) def.photoUrl = data.photoUrl;
    if (data.email) def.email = data.email;
    if (data.emailVerified) def.emailVerified = data.emailVerified;
    if (data.phoneNumber) def.phoneNumber = data.phoneNumber;
    if (data.createdAt) def.createdAt = data.createdAt;
    if (data.lastLoginAt) def.lastLoginAt = data.lastLoginAt;

    if (data.site) def.site = data.site;
    if (data.twitterName) def.twitterName = data.twitterName;
    if (data.instagramName) def.instagramName = data.instagramName;
    if (typeof(data.notifications) === 'object' && data.notifications !== null) {
      def.notifications = data.notifications;
    }

    return new User(def);
  }
}

export class LoggedUser extends User {
  protected creds: UserCredential;

  constructor(data: UserData, creds: UserCredential) {
    super(data);

    this.creds = creds;
  }

  get uid() { return this.creds.user.uid; }
}
