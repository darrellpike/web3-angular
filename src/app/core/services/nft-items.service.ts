import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NftItem } from '@datatypes/collection-item';

@Injectable({
  providedIn: 'root',
})
export class NftItemsService {
  // constructor() { }

  getHotCollection(): Observable<NftItem[]> {
    return of([
      {
        id: '',
        imageUrl: 'coll-1.jpg',
        author: {
          avatar: 'author-1.jpg',
          name: '',
        },
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
        author: {
          avatar: 'author-2.jpg',
          name: '',
        },
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
        author: {
          avatar: 'author-3.jpg',
          name: '',
        },
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
        author: {
          avatar: 'author-4.jpg',
          name: '',
        },
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
        author: {
          avatar: 'author-5.jpg',
          name: '',
        },
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
        author: {
          avatar: 'author-6.jpg',
          name: '',
        },
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
    ]);
  }

  getNewItems(): Observable<NftItem[]> {
    return of([
      {
        id: '',
        imageUrl: 'static-1.jpg',
        author: {
          avatar: 'author-1.jpg',
          name: 'Monica Lucas',
        },
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
        id: '',
        imageUrl: 'static-2.jpg',
        author: {
          avatar: 'author-10.jpg',
          name: 'Stacy Long',
        },
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
        id: '',
        imageUrl: 'static-3.jpg',
        author: {
          avatar: 'author-11.jpg',
          name: 'Ida Chapman',
        },
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
        id: '',
        imageUrl: 'static-4.jpg',
        author: {
          avatar: 'author-12.jpg',
          name: 'Fred Ryan',
        },
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
        id: '',
        imageUrl: 'anim-4.webp',
        author: {
          avatar: 'author-9.jpg',
          name: 'Franklin Greer',
        },
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
        id: '',
        imageUrl: 'anim-2.webp',
        author: {
          avatar: 'author-2.jpg',
          name: 'Mamie Barnett',
        },
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
        id: '',
        imageUrl: 'anim-1.webp',
        author: {
          avatar: 'author-3.jpg',
          name: 'Nicholas Daniels',
        },
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
        id: '',
        imageUrl: 'static-1.jpg',
        author: {
          avatar: 'author-1.jpg',
          name: 'Monica Lucas',
        },
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
        id: '',
        imageUrl: 'static-1.jpg',
        author: {
          avatar: 'author-1.jpg',
          name: 'Monica Lucas',
        },
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
    ]);
  }
}
