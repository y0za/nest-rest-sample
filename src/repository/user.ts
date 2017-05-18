import { Component } from 'nest.js';
import { User } from '../entity/user';

export interface UserRepository {
  find(): User[];
  findFirst(id: number): User | null;
  save(user: User): User;
}

const users: User[] = [
  new User('kaban', 1),
  new User('serval', 2),
  new User('raccoon', 3),
  new User('fennec', 4),
];

@Component()
export class UserRepositoryImpl implements UserRepository {
  find(): User[] {
    return users;
  }

  findFirst(id: number): User | null {
    return users.find((u: User) => {
      return u.id === id;
    });
  }

  save(user: User): User {
    const maxId = users.reduce((a: number, b: User) => {
      return Math.max(a, b.id)
    }, 0);
    user.id = maxId + 1;
    users.push(user);

    return user;
  }
}
