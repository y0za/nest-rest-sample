import { Component, Inject } from 'nest.js';
import { User } from '../entity/user';
import { UserRepository } from '../repository/user';

@Component()
export class UserService {
  constructor(@Inject('UserRepository') private userRepository: UserRepository) {
  }

  getUsers(): User[] {
    return this.userRepository.find();
  }

  getUser(id: number): User | null {
    return this.userRepository.findFirst(id);
  }

  addUser(name: string): User {
    const user = new User(name);
    return this.userRepository.save(user);
  }
}
