import { User } from './user';

export interface Collection {
  id: string;
  name: string;
  image: string;
  code: string;
  owner: User;
  // creator?
}
