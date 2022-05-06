import { User } from './user';

export enum UserNotificationEvent {
  StartedFollowing = 0,
  LikedItem,
}

export interface UserNotification {
  toUser: User;
  fromUser: User;
  message: string | null;
  event: UserNotificationEvent | null;
  dateTime: Date;
}

export interface UserNotifications {
  items: UserNotification[];
  unreadCount: number;
}
