import { User } from './user';

export interface Bid {
  id: string;
  sum: number;
  user: User;
  date: Date;
  accepted: boolean;
}
