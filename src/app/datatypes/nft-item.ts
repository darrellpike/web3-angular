import { User } from '@datatypes/user';
import { Collection } from './collection';

export interface NftItem {
  id: string;
  imageUrl: string;
  author: User,
  owner: User;
  title: string;
  code: string;
  created: {
    year: number;
    month: number;
    day: number;
    hour: number;
  },
  price: number;
  likes: number;
  divider: number; // in 1/20 it's 20
  collection: Collection | null;
}

export interface AuctionNftItem extends NftItem {
  untilDate?: Date;
}
