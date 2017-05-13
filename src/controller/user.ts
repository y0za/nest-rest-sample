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

interface User {
  id: number;
  name: string;
}

@Controller('users')
export class UserController {
  private users: User[] = [
    { id: 1, name: 'kaban' },
    { id: 2, name: 'serval' },
    { id: 3, name: 'raccoon' },
    { id: 4, name: 'fennec' },
  ];

  @Get()
  index(@Response() res: express.Response): void {
    res.status(HttpStatus.OK).json({
      users: this.users,
    })
  }

  @Get('/:id')
  show(@Response() res: express.Response, @Param('id') id: string): void {
    const user = this.users.find((u: User) => {
      return u.id.toString() === id
    });

    res.status(HttpStatus.OK).json(user);
  }

  @Post()
  create(@Response() res: express.Response, @Body('name') name: string): void {
    const maxId = this.users.reduce((a: number, b: User) => {
      return Math.max(a, b.id)
    }, 0);
    console.log(`name: ${name}`);
    const user: User = {
      id: maxId + 1,
      name: name,
    };
    this.users.push(user);

    res.status(HttpStatus.CREATED).json(user);
  }
}
