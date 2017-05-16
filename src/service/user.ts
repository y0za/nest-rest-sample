import { Component } from 'nest.js';
import { User } from '../entity/user';

@Component()
export class UserService {
  private users: User[] = [
    new User(1, 'kaban'),
    new User(2, 'serval'),
    new User(3, 'raccoon'),
    new User(4, 'fennec'),
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User | null {
    return this.users.find((u: User) => {
      return u.id.toString() === id
    });
  }

  addUser(name: string): User {
    const maxId = this.users.reduce((a: number, b: User) => {
      return Math.max(a, b.id)
    }, 0);
    const user: User = {
      id: maxId + 1,
      name: name,
    };
    this.users.push(user);

    return user;
  }
}
