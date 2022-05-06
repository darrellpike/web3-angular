import { NftItem } from '@app/datatypes/nft-item';
import { User } from '@datatypes/user';
import { Bid } from '@datatypes/bid';
import { Collection } from '@datatypes/collection';
import { Category } from '@datatypes/category';
import { UserNotification, UserNotificationEvent } from '@datatypes/notification';

export const users: User[] = [
  {
    id: '1',
    avatar: 'author-1.jpg',
    name: 'Monica Lucas',
    nickname: '@monicaaa',
  },
  {
    id: '2',
    avatar: 'author-2.jpg',
    name: 'Mamie Barnett',
    nickname: '@mamieba',
  },
  {
    id: '3',
    avatar: 'author-3.jpg',
    name: 'Nicholas Daniels',
    nickname: '@nickdan',
  },
  {
    id: '4',
    avatar: 'author-4.jpg',
    name: 'Nakamoto',
    nickname: '@nakmoto456',
  },
  {
    id: '5',
    avatar: 'author-5.jpg',
    name: 'Ariella Lopez',
    nickname: '@arilope',
  },
  {
    id: '6',
    avatar: 'author-6.jpg',
    name: 'Herbert Walles',
    nickname: '@hwall',
  },
  {
    id: '7',
    avatar: 'author-7.jpg',
    name: 'James Woods',
    nickname: '@jawod',
  },
  {
    id: '8',
    avatar: 'author-8.jpg',
    name: 'Jane Martini',
    nickname: '@janedoe',
  },
  {
    id: '9',
    avatar: 'author-9.jpg',
    name: 'Franklin Greer',
    nickname: '@frankling',
  },
  {
    id: '10',
    avatar: 'author-10.jpg',
    name: 'Stacy Long',
    nickname: '@stlong',
  },
  {
    id: '11',
    avatar: 'author-11.jpg',
    name: 'Ida Chapman',
    nickname: '@idachapman11',
  },
  {
    id: '12',
    avatar: 'author-12.jpg',
    name: 'Fred Ryan',
    nickname: '@frodo',
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

export const allItems: NftItem[] = ([] as NftItem[]).concat(nftItems);

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

export const auctionItems = nftItems;
export const collectionItems = nftItems;

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Abstraction',
    image: 'coll-1.jpg',
    code: 'ERC-123',
    owner: users[0],
  },
  {
    id: '2',
    name: 'Patternlicious',
    image: 'coll-2.jpg',
    code: 'ERC-46',
    owner: users[1],
  },
  {
    id: '3',
    name: 'Skecthify',
    image: 'coll-3.jpg',
    code: 'ERC-11',
    owner: users[2],
  },
  {
    id: '4',
    name: 'Cartoonism',
    image: 'coll-4.jpg',
    code: 'ERC-105',
    owner: users[3],
  },
  {
    id: '5',
    name: 'Virtuland',
    image: 'coll-5.jpg',
    code: 'ERC-86',
    owner: users[4],
  },
  {
    id: '6',
    name: 'Papercut',
    image: 'coll-6.jpg',
    code: 'ERC-159',
    owner: users[5],
  },
];

export const hotCollections = collections;

export const categories: Category[] = [
  {
    id: '1',
    name: 'Art',
    icon: 'fa-image',
  },
  {
    id: '2',
    name: 'Music',
    icon: 'fa-music',
  },
  {
    id: '3',
    name: 'Domain Names',
    icon: 'fa-search',
  },
  {
    id: '4',
    name: 'Virtual World',
    icon: 'fa-globe',
  },
  {
    id: '4',
    name: 'Trading Cards',
    icon: 'fa-vcard',
  },
  {
    id: '6',
    name: 'Collectibles',
    icon: 'fa-th',
  },
  {
    id: '7',
    name: 'Sports',
    icon: 'fa-clock-o',
  },
  {
    id: '8',
    name: 'Utility',
    icon: 'fa-wrench',
  },
];

export const notifications: UserNotification[] = [
  {
    toUser: users[0],
    fromUser: users[11],
    message: null,
    event: UserNotificationEvent.StartedFollowing,
    dateTime: new Date(2022, 4, 6),
  },
  {
    toUser: users[0],
    fromUser: users[11],
    message: null,
    event: UserNotificationEvent.LikedItem,
    dateTime: new Date(2022, 4, 6),
  },
  {
    toUser: users[0],
    fromUser: users[10],
    message: null,
    event: UserNotificationEvent.StartedFollowing,
    dateTime: new Date(2022, 4, 4),
  },
  {
    toUser: users[0],
    fromUser: users[9],
    message: null,
    event: UserNotificationEvent.LikedItem,
    dateTime: new Date(2022, 4, 3),
  },
  {
    toUser: users[0],
    fromUser: users[7],
    message: null,
    event: UserNotificationEvent.StartedFollowing,
    dateTime: new Date(2022, 4, 2),
  },
];
