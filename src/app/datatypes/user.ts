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
  avatar: string;
  name: string;
  data: UserData;

  constructor(data?: UserData) {
    if (data) {
      this.data = data;
      this.avatar = (data && data.photoUrl) !== '' ? data.photoUrl : defaultAvatar;
      this.name = (data && data.nickname) !== '' ? data.nickname : data.name;
    } else {
      this.data = User.getDefaultData();
      this.avatar = defaultAvatar;
      this.name = '';
    }
  }

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
    const newUser = new User();

    if (data.userId) newUser.data.userId = data.userId;
    if (data.name) newUser.data.name = data.name;
    if (data.nickname) newUser.data.nickname = data.nickname;
    if (data.photoUrl) newUser.data.photoUrl = data.photoUrl;
    if (data.email) newUser.data.email = data.email;
    if (data.emailVerified) newUser.data.emailVerified = data.emailVerified;
    if (data.phoneNumber) newUser.data.phoneNumber = data.phoneNumber;
    if (data.createdAt) newUser.data.createdAt = data.createdAt;
    if (data.lastLoginAt) newUser.data.lastLoginAt = data.lastLoginAt;

    if (data.site) newUser.data.site = data.site;
    if (data.twitterName) newUser.data.twitterName = data.twitterName;
    if (data.instagramName) newUser.data.instagramName = data.instagramName;
    if (typeof(data.notifications) === 'object' && data.notifications !== null) {
      newUser.data.notifications = data.notifications;
    }

    return newUser;
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
