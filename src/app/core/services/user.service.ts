import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@datatypes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // constructor() { }

  getTopSellers(): Observable<User[]> {
    return of([
      {
        id: '',
        name: 'Monica Lucas',
        avatar: 'author-1.jpg',
        balance: 3.1,
      },
      {
        id: '',
        name: 'Mamie Barnett',
        avatar: 'author-2.jpg',
        balance: 2.8,
      },
      {
        id: '',
        name: 'Nicholas Daniels',
        avatar: 'author-3.jpg',
        balance: 2.5,
      },
      {
        id: '',
        name: 'Lori Hart',
        avatar: 'author-4.jpg',
        balance: 2.2,
      },
      {
        id: '',
        name: 'Jimmy Wright',
        avatar: 'author-5.jpg',
        balance: 1.9,
      },
      {
        id: '',
        name: 'Karla Sharp',
        avatar: 'author-6.jpg',
        balance: 1.6,
      },
      {
        id: '',
        name: 'Gayle Hicks',
        avatar: 'author-7.jpg',
        balance: 1.5,
      },
      {
        id: '',
        name: 'Claude Banks',
        avatar: 'author-8.jpg',
        balance: 1.3,
      },
      {
        id: '',
        name: 'Franklin Greer',
        avatar: 'author-9.jpg',
        balance: 0.9,
      },
      {
        id: '',
        name: 'Stacy Long',
        avatar: 'author-10.jpg',
        balance: 0.8,
      },
      {
        id: '',
        name: 'Ida Chapman',
        avatar: 'author-11.jpg',
        balance: 0.6,
      },
      {
        id: '',
        name: 'Fred Ryan',
        avatar: 'author-12.jpg',
        balance: 0.5,
      },
    ]);
  }
}
