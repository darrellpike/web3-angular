import { User } from '@datatypes/user';

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
}
