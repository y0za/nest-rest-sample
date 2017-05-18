import { Module } from 'nest.js';
import { UserController } from './controller/user';
import { UserService } from './service/user';
import {
  UserRepositoryImpl,
} from './repository/user';

@Module({
  controllers: [
    UserController,
  ],
  components: [
    UserService,
    { provide: 'UserRepository', useClass: UserRepositoryImpl },
  ],
})
export class ApiModule {
}
