import { Component } from 'nest.js';

interface User {
  id: number;
  name: string;
}

@Component()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'kaban' },
    { id: 2, name: 'serval' },
    { id: 3, name: 'raccoon' },
    { id: 4, name: 'fennec' },
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
