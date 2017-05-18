import * as express from 'express';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
} from 'nest.js';
import { UserService } from '../service/user';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  index(@Response() res: express.Response): void {
    const users = this.userService.getUsers();

    res.status(HttpStatus.OK).json({
      users,
    })
  }

  @Get('/:id')
  show(@Response() res: express.Response, @Param('id') id: string): void {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      res.status(HttpStatus.BAD_REQUEST).json({
        error: `id must be integer. id: ${id}`,
      });
    }

    const user = this.userService.getUser(userId);

    res.status(HttpStatus.OK).json(user);
  }

  @Post()
  create(@Response() res: express.Response, @Body('name') name: string): void {
    const user = this.userService.addUser(name);

    res.status(HttpStatus.CREATED).json(user);
  }
}
