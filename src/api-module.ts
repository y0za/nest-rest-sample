import { Module } from 'nest.js';
import { UserController } from './controller/user';
import { UserService } from './service/user';

@Module({
  controllers: [
    UserController,
  ],
  components: [
    UserService,
  ],
})
export class ApiModule {
}
