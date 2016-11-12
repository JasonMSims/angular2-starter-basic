import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Jason',
    username: 'jasonmsims',
    avatar: 'https://pbs.twimg.com/profile_images/610399513988235264/jnYvwcc4_400x400.jpg'
  },
  {
    id: 2,
    name: 'Grant',
    username: 'norwoodphot0',
    avatar: 'https://pbs.twimg.com/profile_images/766251007676411904/Qh0MO-Cd_400x400.jpg'
  },
  {
    id: 3,
    name: 'Chris',
    username: 'Skrybe82',
    avatar: 'https://pbs.twimg.com/profile_images/676974383580233729/PjOgZMnt_400x400.jpg'
  }
]);

@Injectable()
export class UserService {

  // get all users
  getUsers() {
    return usersPromise;
  }

  // find specific users
  getUser(username) {

    return usersPromise.then(users => users.find(user => user.username === username));

  }
}