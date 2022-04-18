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
      },
    ]);
  }
}
