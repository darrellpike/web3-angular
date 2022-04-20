export interface NftItem {
  id: string;
  imageUrl: string;
  author: {
    avatar: string;
    name: string;
  },
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
