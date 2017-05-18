import { Component } from 'nest.js';
import { User } from '../entity/user';

@Component()
export class UserService {
  private users: User[] = [
    new User('kaban', 1),
    new User('serval', 2),
    new User('raccoon', 3),
    new User('fennec', 4),
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
