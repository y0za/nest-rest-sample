import { Module } from 'nest.js';
import { UserController } from './controller/user';

@Module({
  controllers: [
    UserController,
  ],
})
export class ApiModule {
}
