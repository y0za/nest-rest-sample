import {
  Controller,
  Get,
  Post,
} from 'nest.js';

@Controller('users')
export class UserController {
  @Get()
  index(): void {
  }

  @Get('/:id')
  show(): void {
  }

  @Post()
  create(): void {
  }
}
