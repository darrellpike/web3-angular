import { NftItem } from './nft-item';
import { User } from './user';

export interface Bid {
  id?: string;
  nft: NftItem;
  sum: number;
  user: User;
  date: Date;
  accepted: boolean;
}
