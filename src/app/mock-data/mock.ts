import { NftItem } from '@datatypes/collection-item';
import { User } from '@datatypes/user';
import { Bid } from '@datatypes/bid';

export const users: User[] = [
  {
    id: '1',
    avatar: 'author-1.jpg',
    name: 'Monica Lucas',
    balance: 0,
  },
  {
    id: '2',
    avatar: 'author-2.jpg',
    name: 'Mamie Barnett',
    balance: 0,
  },
  {
    id: '3',
    avatar: 'author-3.jpg',
    name: 'Nicholas Daniels',
    balance: 0,
  },
  {
    id: '4',
    avatar: 'author-4.jpg',
    name: 'Nakamoto',
    balance: 0,
  },
  {
    id: '5',
    avatar: 'author-5.jpg',
    name: 'Ariella Lopez',
    balance: 0,
  },
  {
    id: '6',
    avatar: 'author-6.jpg',
    name: 'Herbert Walles',
    balance: 0,
  },
  {
    id: '7',
    avatar: 'author-7.jpg',
    name: 'James Woods',
    balance: 0,
  },
  {
    id: '8',
    avatar: 'author-8.jpg',
    name: 'Jane Martini',
    balance: 0,
  },
  {
    id: '9',
    avatar: 'author-9.jpg',
    name: 'Franklin Greer',
    balance: 0,
  },
  {
    id: '10',
    avatar: 'author-10.jpg',
    name: 'Stacy Long',
    balance: 0,
  },
  {
    id: '11',
    avatar: 'author-11.jpg',
    name: 'Ida Chapman',
    balance: 0,
  },
  {
    id: '12',
    avatar: 'author-12.jpg',
    name: 'Fred Ryan',
    balance: 0,
  },
];

export const nftItems: NftItem[] = [
  {
    id: '1',
    imageUrl: 'static-1.jpg',
    author: users[0],
    owner: users[10],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Pinky Ocean',
    code: 'ERC-1932',
    price: 0.08,
    likes: 50,
    divider: 20,
  },
  {
    id: '2',
    imageUrl: 'static-2.jpg',
    author: users[1],
    owner: users[11],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Deep Sea Phantasy',
    code: 'ERC-1932',
    price: 0.06,
    likes: 80,
    divider: 22,
  },
  {
    id: '3',
    imageUrl: 'static-3.jpg',
    author: users[2],
    owner: users[9],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Rainbow Style',
    code: 'ERC-2054',
    price: 0.09,
    likes: 24,
    divider: 11,
  },
  {
    id: '4',
    imageUrl: 'static-4.jpg',
    author: users[3],
    owner: users[8],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Two Tigers',
    code: 'ERC-1536',
    price: 0.14,
    likes: 45,
    divider: 15,
  },
  {
    id: '5',
    imageUrl: 'anim-4.webp',
    author: users[4],
    owner: users[8],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'The Truth',
    code: 'ERC-1932',
    price: 0.06,
    likes: 50,
    divider: 26,
  },
  {
    id: '6',
    imageUrl: 'anim-2.webp',
    author: users[5],
    owner: users[9],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Running Puppets',
    code: 'ERC-1932',
    price: 0.03,
    likes: 24,
    divider: 45,
  },
  {
    id: '7',
    imageUrl: 'anim-1.webp',
    author: users[6],
    owner: users[10],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'USA Wordmation',
    code: 'ERC-1932',
    price: 0.09,
    likes: 76,
    divider: 25,
  },
  {
    id: '8',
    imageUrl: 'static-1.jpg',
    author: users[0],
    owner: users[11],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Pinky Ocean',
    code: 'ERC-1932',
    price: 0.08,
    likes: 50,
    divider: 20,
  },
  {
    id: '9',
    imageUrl: 'static-1.jpg',
    author: users[0],
    owner: users[11],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Pinky Ocean',
    code: 'ERC-1932',
    price: 0.08,
    likes: 50,
    divider: 20,
  },
];

export const hotItems: NftItem[] = [
  {
    id: '',
    imageUrl: 'coll-1.jpg',
    author: users[0],
    owner: users[7],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Abstraction',
    code: 'ERC-192',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
  {
    id: '',
    imageUrl: 'coll-2.jpg',
    author: users[1],
    owner: users[8],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Patternlicious',
    code: 'ERC-61',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
  {
    id: '',
    imageUrl: 'coll-3.jpg',
    author: users[2],
    owner: users[9],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Skecthify',
    code: 'ERC-126',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
  {
    id: '',
    imageUrl: 'coll-4.jpg',
    author: users[3],
    owner: users[8],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Cartoonism',
    code: 'ERC-73',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
  {
    id: '',
    imageUrl: 'coll-5.jpg',
    author: users[4],
    owner: users[10],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Virtuland',
    code: 'ERC-85',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
  {
    id: '',
    imageUrl: 'coll-6.jpg',
    author: users[5],
    owner: users[11],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Papercut',
    code: 'ERC-42',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
];

export const allItems: NftItem[] = ([] as NftItem[]).concat(nftItems, hotItems);

export const bidsHistory: Bid[] = [
  {
    id: '',
    sum: 0.005,
    user: users[7],
    date: new Date('2022-03-05T11:27:54Z'),
    accepted: false,
  },
  {
    id: '',
    sum: 0.005,
    user: users[8],
    date: new Date('2022-03-05T11:07:35Z'),
    accepted: true,
  },
  {
    id: '',
    sum: 0.005,
    user: users[9],
    date: new Date('2022-03-05T11:05:10Z'),
    accepted: false,
  },
  {
    id: '',
    sum: 0.004,
    user: users[10],
    date: new Date('2022-03-05T11:03:00Z'),
    accepted: false,
  },
  {
    id: '',
    sum: 0.003,
    user: users[11],
    date: new Date('2022-03-05T10:57:01Z'),
    accepted: false,
  },
];

export const bids: Bid[] = [...bidsHistory];
bids.splice(0, 1);

export const auctionItems: NftItem[] = [
  {
    id: '',
    imageUrl: 'coll-5.jpg',
    author: users[4],
    owner: users[10],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Virtuland',
    code: 'ERC-85',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
];

export const collectionItems: NftItem[] = [
  {
    id: '',
    imageUrl: 'coll-5.jpg',
    author: users[4],
    owner: users[10],
    created: {
      year: 2022,
      month: 9,
      day: 16,
      hour: 10,
    },
    title: 'Virtuland',
    code: 'ERC-85',
    price: 0.08,
    likes: 50,
    divider: 1,
  },
];